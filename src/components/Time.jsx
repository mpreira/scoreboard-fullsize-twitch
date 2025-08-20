import '../utils/Time';

const Time = () => {
    // This component displays the current time in a formatted manner

    return(
        <div className="time" id="time">
            <span id="minutes">00</span>:<span id="seconds">00</span>
        </div>
    )
};
export default Time;