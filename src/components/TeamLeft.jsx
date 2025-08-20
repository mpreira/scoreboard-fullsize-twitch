import EnglandLogo from '../assets/LOGOS/Flag_of_England.svg.png';

const TeamLeft = () => {
    return (
        <div className="BlockTeamLeft">
            <div className="teamOne">
                {/* logo */}
                <div className="logoTeam" id="logoLeft" >
                    <img src={EnglandLogo} alt="Logo équipe 1" />
                </div>
                
                {/* nom d'équipe */}
                <div className="team" id="teamLeft">
                    <div className="teamColor" id="teamColorLeft"></div>
                    <p id="teamNameLeft">Équipe 1</p>
                </div>

                {/* score */}
                <div className="teamScore" id="scoreLeft">
                    <p></p>
                </div>
            </div>

            <div className="cards">
                {/* cards for team members or scores can be added here */}
            </div>
        </div>
    )
};
export default TeamLeft;