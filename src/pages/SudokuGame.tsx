import { useState, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";

type Board = (number | null)[][];
type Difficulty = "easy" | "medium" | "hard";

// 유효한 스도쿠 보드 생성
function generateSolvedBoard(): Board {
  const board: Board = Array.from({ length: 9 }, () => Array(9).fill(null));

  function isValid(board: Board, row: number, col: number, num: number): boolean {
    for (let i = 0; i < 9; i++) {
      if (board[row][i] === num || board[i][col] === num) return false;
    }
    const boxRow = Math.floor(row / 3) * 3;
    const boxCol = Math.floor(col / 3) * 3;
    for (let i = boxRow; i < boxRow + 3; i++) {
      for (let j = boxCol; j < boxCol + 3; j++) {
        if (board[i][j] === num) return false;
      }
    }
    return true;
  }

  function solve(board: Board): boolean {
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        if (board[row][col] === null) {
          const nums = shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]);
          for (const num of nums) {
            if (isValid(board, row, col, num)) {
              board[row][col] = num;
              if (solve(board)) return true;
              board[row][col] = null;
            }
          }
          return false;
        }
      }
    }
    return true;
  }

  solve(board);
  return board;
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function generatePuzzle(difficulty: Difficulty): { puzzle: Board; solution: Board } {
  const solution = generateSolvedBoard();
  const puzzle = solution.map((row) => [...row]);
  const removeCounts: Record<Difficulty, number> = { easy: 35, medium: 45, hard: 55 };
  let toRemove = removeCounts[difficulty];
  const positions = shuffle(
    Array.from({ length: 81 }, (_, i) => [Math.floor(i / 9), i % 9])
  );
  for (const [r, c] of positions) {
    if (toRemove <= 0) break;
    puzzle[r][c] = null;
    toRemove--;
  }
  return { puzzle, solution };
}

function checkBoard(board: Board): { isComplete: boolean; errors: boolean[][] } {
  const errors: boolean[][] = Array.from({ length: 9 }, () => Array(9).fill(false));
  let isComplete = true;

  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      const val = board[row][col];
      if (val === null) {
        isComplete = false;
        continue;
      }
      // 행 검사
      for (let i = 0; i < 9; i++) {
        if (i !== col && board[row][i] === val) {
          errors[row][col] = true;
          errors[row][i] = true;
        }
      }
      // 열 검사
      for (let i = 0; i < 9; i++) {
        if (i !== row && board[i][col] === val) {
          errors[row][col] = true;
          errors[i][col] = true;
        }
      }
      // 3x3 박스 검사
      const boxRow = Math.floor(row / 3) * 3;
      const boxCol = Math.floor(col / 3) * 3;
      for (let i = boxRow; i < boxRow + 3; i++) {
        for (let j = boxCol; j < boxCol + 3; j++) {
          if (i !== row && j !== col && board[i][j] === val) {
            errors[row][col] = true;
            errors[i][j] = true;
          }
        }
      }
    }
  }

  return { isComplete, errors };
}

export default function SudokuGame() {
  const [difficulty, setDifficulty] = useState<Difficulty>("easy");
  const [puzzle, setPuzzle] = useState<Board>([]);
  const [solution, setSolution] = useState<Board>([]);
  const [board, setBoard] = useState<Board>([]);
  const [fixed, setFixed] = useState<boolean[][]>([]);
  const [selected, setSelected] = useState<[number, number] | null>(null);
  const [status, setStatus] = useState<"playing" | "success" | "error">("playing");
  const [errors, setErrors] = useState<boolean[][]>(
    Array.from({ length: 9 }, () => Array(9).fill(false))
  );
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const startGame = useCallback((diff: Difficulty) => {
    const { puzzle, solution } = generatePuzzle(diff);
    setPuzzle(puzzle);
    setSolution(solution);
    setBoard(puzzle.map((row) => [...row]));
    setFixed(puzzle.map((row) => row.map((cell) => cell !== null)));
    setSelected(null);
    setStatus("playing");
    setErrors(Array.from({ length: 9 }, () => Array(9).fill(false)));
    setTimer(0);
    setIsRunning(true);
  }, []);

  useEffect(() => {
    startGame(difficulty);
  }, []);

  useEffect(() => {
    if (!isRunning) return;
    const id = setInterval(() => setTimer((t) => t + 1), 1000);
    return () => clearInterval(id);
  }, [isRunning]);

  const handleCellClick = (row: number, col: number) => {
    if (fixed[row][col] || status === "success") return;
    setSelected([row, col]);
  };

  const handleInput = (num: number | null) => {
    if (!selected || status === "success") return;
    const [row, col] = selected;
    if (fixed[row][col]) return;

    const newBoard = board.map((r) => [...r]);
    newBoard[row][col] = num;
    setBoard(newBoard);

    const { isComplete, errors: newErrors } = checkBoard(newBoard);
    setErrors(newErrors);

    const hasErrors = newErrors.some((row) => row.some((e) => e));
    if (hasErrors) {
      setStatus("error");
    } else if (isComplete) {
      setStatus("success");
      setIsRunning(false);
    } else {
      setStatus("playing");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!selected) return;
    const key = e.key;
    if (key >= "1" && key <= "9") {
      handleInput(parseInt(key));
    } else if (key === "Backspace" || key === "Delete" || key === "0") {
      handleInput(null);
    } else if (key === "ArrowUp" && selected[0] > 0) {
      setSelected([selected[0] - 1, selected[1]]);
    } else if (key === "ArrowDown" && selected[0] < 8) {
      setSelected([selected[0] + 1, selected[1]]);
    } else if (key === "ArrowLeft" && selected[1] > 0) {
      setSelected([selected[0], selected[1] - 1]);
    } else if (key === "ArrowRight" && selected[1] < 8) {
      setSelected([selected[0], selected[1] + 1]);
    }
  };

  const formatTime = (s: number) =>
    `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;

  const statusBar = () => {
    if (status === "success")
      return (
        <div className="bg-green-500/20 border border-green-500 text-green-400 px-6 py-3 rounded-lg text-center text-lg font-bold">
          SUCCESS - {formatTime(timer)}
        </div>
      );
    if (status === "error")
      return (
        <div className="bg-red-500/20 border border-red-500 text-red-400 px-6 py-3 rounded-lg text-center text-lg font-bold">
          CONFLICT DETECTED
        </div>
      );
    return (
      <div className="bg-gray-700/50 border border-gray-600 text-gray-300 px-6 py-3 rounded-lg text-center text-lg">
        {formatTime(timer)}
      </div>
    );
  };

  if (board.length === 0) return null;

  return (
    <div
      className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-10 px-4"
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <div className="w-full max-w-lg">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <Link to="/about" className="text-gray-400 hover:text-white transition text-sm">
            &larr; Back
          </Link>
          <h1 className="text-2xl font-bold tracking-wide">SUDOKU</h1>
          <div className="w-16" />
        </div>

        {/* Status */}
        <div className="mb-4">{statusBar()}</div>

        {/* Difficulty */}
        <div className="flex gap-2 mb-4 justify-center">
          {(["easy", "medium", "hard"] as Difficulty[]).map((d) => (
            <button
              key={d}
              onClick={() => {
                setDifficulty(d);
                startGame(d);
              }}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                difficulty === d
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
            >
              {d.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Board */}
        <div className="grid grid-cols-9 border-2 border-gray-400 rounded-lg overflow-hidden mx-auto w-fit">
          {board.map((row, r) =>
            row.map((cell, c) => {
              const isSelected = selected?.[0] === r && selected?.[1] === c;
              const isHighlight =
                selected && (selected[0] === r || selected[1] === c);
              const isSameBox =
                selected &&
                Math.floor(selected[0] / 3) === Math.floor(r / 3) &&
                Math.floor(selected[1] / 3) === Math.floor(c / 3);
              const isSameValue =
                selected && cell !== null && board[selected[0]][selected[1]] === cell;
              const isError = errors[r][c];
              const isFixed = fixed[r][c];

              const borderR = c % 3 === 2 && c !== 8 ? "border-r-2 border-r-gray-400" : "border-r border-r-gray-700";
              const borderB = r % 3 === 2 && r !== 8 ? "border-b-2 border-b-gray-400" : "border-b border-b-gray-700";

              let bg = "bg-gray-800";
              if (isSelected) bg = "bg-indigo-700";
              else if (isSameValue) bg = "bg-indigo-900/60";
              else if (isHighlight || isSameBox) bg = "bg-gray-700/60";

              let textColor = isFixed ? "text-gray-200" : "text-indigo-400";
              if (isError) textColor = "text-red-400";

              return (
                <button
                  key={`${r}-${c}`}
                  onClick={() => handleCellClick(r, c)}
                  className={`w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-lg font-mono font-bold transition-colors cursor-pointer select-none ${bg} ${textColor} ${borderR} ${borderB} ${
                    isError ? "animate-pulse" : ""
                  }`}
                >
                  {cell ?? ""}
                </button>
              );
            })
          )}
        </div>

        {/* Number Pad */}
        <div className="flex gap-2 mt-4 justify-center flex-wrap">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
            <button
              key={num}
              onClick={() => handleInput(num)}
              className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-700 hover:bg-indigo-600 text-white rounded-lg text-lg font-bold transition"
            >
              {num}
            </button>
          ))}
          <button
            onClick={() => handleInput(null)}
            className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-700 hover:bg-red-600 text-white rounded-lg text-sm font-bold transition"
          >
            DEL
          </button>
        </div>

        {/* New Game */}
        <div className="mt-6 text-center">
          <button
            onClick={() => startGame(difficulty)}
            className="px-6 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg font-medium transition"
          >
            NEW GAME
          </button>
        </div>
      </div>
    </div>
  );
}
