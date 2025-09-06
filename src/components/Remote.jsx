import { addPoints, resetScores, startTimer, stopTimer, resetTimer, toggleYellow, toggleRed, setTeamName, getTeamName, setTimer } from '../utils/Control';
import { setHalf } from '../utils/Control';
import Time from './Time';
import { useState } from 'react';
// STYLES
import '../styles/remote.css';



const Remote = () => {

    const [refreshKey, setRefreshKey] = useState(0);

    const handleChange = (e) => {
        const [m, s] = e.target.value.split(":").map((n) => parseInt(n, 10) || 0);
        const seconds = m * 60 + s;
        setTimer(seconds);
    };

    const refreshLocal = () => {
        setRefreshKey(prev => prev + 1);
    };

    return(
        <div className="remote" key={refreshKey}>
        <div className="remoteInput">
            <input
                type="text"
                defaultValue={getTeamName('left')}
                onBlur={(e) => setTeamName('left', e.target.value)}
            />
            <input
                type="text"
                defaultValue={getTeamName('right')}
                onBlur={(e) => setTeamName('right', e.target.value)}
            />
        </div>

        <>
                <select
                    value={localStorage.getItem('half') || '1'}
                    onChange={(e) => setHalf(e.target.value)}
                >
                    <option value="1">1ère mi-temps</option>
                    <option value="2">2ème mi-temps</option>
                </select>
        </>
        
        <div className="Team One">
            <h2 id="teamNameLeftTitle">{getTeamName('left')}</h2>
            <div className="teamOnePlus">
                <button onClick={() => addPoints("left", 2)}>+2</button>
                <button onClick={() => addPoints("left", 3)}>+3</button>
                <button onClick={() => addPoints("left", 5)}>+5</button>
            </div>
            <div className="teamOneMinus">
                <button onClick={() => addPoints("left", -2)}>-2</button>
                <button onClick={() => addPoints("left", -3)}>-3</button>
                <button onClick={() => addPoints("left", -5)}>-5</button>
            </div>
        </div>
        <div className="Team Two">
            <h2 id="teamNameRightTitle">{getTeamName('right')}</h2>
            <div className="teamTwoPlus">
                <button onClick={() => addPoints("right", 2)}>+2</button>
                <button onClick={() => addPoints("right", 3)}>+3</button>
                <button onClick={() => addPoints("right", 5)}>+5</button>
            </div>
            <div className="teamTwoMinus">
                <button onClick={() => addPoints("right", -2)}>-2</button>
                <button onClick={() => addPoints("right", -3)}>-3</button>
                <button onClick={() => addPoints("right", -5)}>-5</button>
            </div>
        </div>
        <button id="resetScores" onClick={resetScores}>Reset Scores</button><br />
        <button onClick={refreshLocal}>Rafraîchir</button>
        <div className="timeControl">
            <h2>Time Control</h2>
            <div id="time" className="remoteTime">
                <Time />
            </div>
            <div className='remoteInput'>
                    <input
                        type="text"
                        pattern="^([0-9]{1,3}):([0-5][0-9])$"
                        placeholder="mm:ss (max 200:00)"
                        defaultValue="00:00"
                        onChange={handleChange}
                    />
            </div>
            <button onClick={startTimer}>Start</button>
            <button onClick={stopTimer}>Stop</button>
            <button onClick={() => { stopTimer(); localStorage.setItem('timerSeconds', '2400'); }}>40 min</button>
            <button onClick={resetTimer}>Reset</button>
        </div>
        <div className="fouls">
            <h2>Fouls</h2>
            <div className="teamOneFouls">
                <h3>{getTeamName('left')}</h3>
                <button id="leftYellowOne" onClick={() => toggleYellow('left', 1)}>CJ 1</button>
                <button id="leftYellowTwo" onClick={() => toggleYellow('left', 2)}>CJ 2</button>
                <button id="leftYellowThree" onClick={() => toggleYellow('left', 3)}>CJ 3</button>
                <button id="leftRedOne" onClick={() => toggleRed('left', 1)}>CR 1</button>
                <button id="leftRedTwo" onClick={() => toggleRed('left', 2)}>CR 2</button>
                <button id="leftRedThree" onClick={() => toggleRed('left', 3)}>CR 3</button>
            </div>
            <div className="teamTwoFouls">
                <h3>{getTeamName('right')}</h3>
                <button id="rightYellowOne" onClick={() => toggleYellow('right', 1)}>CJ 1</button>
                <button id="rightYellowTwo" onClick={() => toggleYellow('right', 2)}>CJ 2</button>
                <button id="rightYellowThree" onClick={() => toggleYellow('right', 3)}>CJ 3</button>
                <button id="rightRedOne" onClick={() => toggleRed('right', 1)}>CR 1</button>
                <button id="rightRedTwo" onClick={() => toggleRed('right', 2)}>CR 2</button>
                <button id="rightRedThree" onClick={() => toggleRed('right', 3)}>CR 3</button>
            </div>
        </div>
    </div>)
};
export default Remote;