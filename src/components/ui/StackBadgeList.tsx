// techMap.ts


// Badge.tsx


// StackBadgeList.tsx
import { Badge } from "../ui/Badge";
import { techMap } from "../ui/TeckMap.tsx";

export function StackBadgeList({ stacks }: { stacks: string[] }) {
    return (
        <div className="flex flex-wrap gap-3">
            {stacks.map((stack) => {
                const meta = techMap[stack];
                if (!meta) return null;
                return (
                    <Badge
                        key={stack}
                        bg={meta.bg}
                        color={meta.color}
                        Icon={meta.Icon}
                        label={stack}
                    />
                );
            })}
        </div>
    );
}
