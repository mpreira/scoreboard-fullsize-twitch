import React from 'react';
// STYLES
import '../styles/remote.css';

const Remote = () =>{
    return(<div>
        <div className="Team One">
            <h2 id="teamNameLeftTitle"></h2>
            <div className="teamOnePlus">
                <button id="leftPlus2">+2</button>
                <button id="leftPlus3">+3</button>
                <button id="leftPlus5">+5</button>
            </div>
            <div className="teamOneMinus">
                <button id="leftMinus2">-2</button>
                <button id="leftMinus3">-3</button>
                <button id="leftMinus5">-5</button>
            </div>
        </div>
        <div className="Team Two">
            <h2 id="teamNameRightTitle"></h2>
            <div className="teamTwoPlus">
                <button id="rightPlus2">+2</button>
                <button id="rightPlus3">+3</button>
                <button id="rightPlus5">+5</button>
            </div>
            <div className="teamTwoMinus">
                <button id="rightMinus2">-2</button>
                <button id="rightMinus3">-3</button>
                <button id="rightMinus5">-5</button>
            </div>
        </div>
        <button id="resetScores">Reset Scores</button>
        <div className="timeControl">
            <h2>Time Control</h2>
            <div id="time">
                <span id="minutes">00</span>:<span id="seconds">00</span>
            </div>
            <button id="start">Start</button>
            <button id="stop">Stop</button>
            <button id="forty">40 min</button>
            <button id="reset">Reset</button>
        </div>
        <div className="fouls">
            <h2>Fouls</h2>
            <div className="teamOneFouls">
                <h3>Team One</h3>
                <button id="leftYellowOne">CJ 1</button>
                <button id="leftYellowTwo">CJ 2</button>
                <button id="leftYellowThree">CJ 3</button>
                <button id="leftRedOne">CR 1</button>
                <button id="leftRedTwo">CR 2</button>
                <button id="leftRedThree">CR 3</button>
            </div>
            <div className="teamTwoFouls">
                <h3>Team Two</h3>
                <button id="rightYellowOne">CJ 1</button>
                <button id="rightYellowTwo">CJ 2</button>
                <button id="rightYellowThree">CJ 3</button>
                <button id="rightRedOne">CR 1</button>
                <button id="rightRedTwo">CR 2</button>
                <button id="rightRedThree">CR 3</button>
            </div>
        </div>
    </div>)
};
export default Remote;