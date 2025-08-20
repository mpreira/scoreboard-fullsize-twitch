import USALogo from '../assets/LOGOS/Flag_of_the_United_States.svg.png';
import Yellow from '../assets/cards/carton_jaune.png';
import Red from '../assets/cards/carton_rouge.png';
import { getTeamName } from '../utils/Control';

const TeamRight = () => {
    return (
        <div className="BlockTeamRight">
            <div className="cardsRight">
                {/* cards for team members or scores can be added here */}
                <div className="teamRightCards">
                    <img src={Yellow} alt="Carton Jaune" className="card" id="yellowCardRightOne" />
                    <img src={Yellow} alt="Carton Jaune" className="card" id="yellowCardRightTwo" />
                    <img src={Yellow} alt="Carton Jaune" className="card" id="yellowCardRightThree" />
                    <img src={Red} alt="Carton Rouge" className="card" id="redCardRightOne" />
                    <img src={Red} alt="Carton Rouge" className="card" id="redCardRightTwo" />
                    <img src={Red} alt="Carton Rouge" className="card" id="redCardRightThree" />
                </div>
            </div>
            <div className="teamTwo">
                {/* score */}
                <div className="teamScore" id="scoreRight">
                    <p></p>
                </div>
                {/* nom d'équipe */}
                <div className="team" id="teamRight">
                    <div className="teamColor" id="teamColorRight"></div>
                    <p id="teamNameRight">{getTeamName('right')}</p>
                </div>
                {/* logo */}
                <div className="logoTeam" id="logoRight">
                    <img src={USALogo} alt="Logo équipe 2" />
                </div>
            </div>
        </div>
    )
};
export default TeamRight;