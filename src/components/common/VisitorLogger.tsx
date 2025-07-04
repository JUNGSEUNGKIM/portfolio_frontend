// VisitorLogger.js
import {useEffect} from 'react';
import {API_BASE_URL} from "@/config.ts";

function VisitorLogger() {
    // const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(sessionStorage.getItem('visitorLogged'));
        if (!sessionStorage.getItem('visitorLogged')) {
            fetch(`${API_BASE_URL}/visitor/log`);
            sessionStorage.setItem('visitorLogged', 'true');
        }
    }, []);

    return null; // 화면에 출력 안함
}

export default VisitorLogger;
