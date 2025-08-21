import { useEffect } from 'react';
import Yellow from '../assets/cards/carton_jaune.png';
import Red from '../assets/cards/carton_rouge.png';
import { getTeamName, getTeamFlag, applyTeamColors } from '../utils/Control';

const TeamLeft = () => {
    const logo = getTeamFlag('left');
    const teamName = getTeamName("left");

    useEffect(() => {
        applyTeamColors(teamName, "Left");
        console.log(teamName);
    }, [teamName]);

    return (
        <div className="BlockTeamLeft">
            <div className="cardsLeft">
                {/* cards for team members or scores can be added here */}
                <div className="teamLeftCards">
                    <img src={Yellow} alt="Carton Jaune" className="card" id="yellowCardLeftOne" />
                    <img src={Yellow} alt="Carton Jaune" className="card" id="yellowCardLeftTwo" />
                    <img src={Yellow} alt="Carton Jaune" className="card" id="yellowCardLeftThree" />
                    <img src={Red} alt="Carton Rouge" className="card" id="redCardLeftOne" />
                    <img src={Red} alt="Carton Rouge" className="card" id="redCardLeftTwo" />
                    <img src={Red} alt="Carton Rouge" className="card" id="redCardLeftThree" />
                </div>
            </div>
            <div className="teamOne">
                {/* logo */}
                <div className="logoTeam" id="logoLeft" >
                    <img src={logo} alt="Logo équipe 1" />
                </div>
                
                {/* nom d'équipe */}
                <div className="team" id="teamLeft">
                    <div className="teamColor" id="teamColorLeft"></div>
                    <p id="teamNameLeft">{teamName}</p>
                </div>

                {/* score */}
                <div className="teamScore">
                    <div className="space"></div>
                    <p id="scoreLeft"></p>
                </div>
            </div>
        </div>
    )
};
export default TeamLeft;