import { useEffect, useState } from 'react';
import '../utils/Time';

const Time = () => {
    function formatTime(totalSeconds) {
        const mins = String(Math.floor(totalSeconds / 60)).padStart(2, "0");
        const secs = String(totalSeconds % 60).padStart(2, "0");
        return { mins, secs };
    }

    const [seconds, setSeconds] = useState(
        parseInt(localStorage.getItem("timerSeconds") || "0", 10)
    );

    useEffect(() => {
        const handler = (e) => {
            if (e.detail.type === "timer") {
                setSeconds(e.detail.seconds);
            }
        };

        window.addEventListener("scoreboard:change", handler);

        return () => window.removeEventListener("scoreboard:change", handler);
    }, []);

    const { mins, secs } = formatTime(seconds);

    return(
        <div className="time" id="time">
            <span id="minutes">{mins}</span>:<span id="seconds">{secs}</span>
        </div>
    )
};
export default Time;