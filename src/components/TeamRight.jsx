import USALogo from '../assets/LOGOS/Flag_of_the_United_States.svg.png';

const TeamRight = () => {
    return (
        <div className="BlockTeamRight">
            <div className="teamTwo">
                {/* score */}
                <div className="teamScore" id="scoreRight">
                    <p></p>
                </div>
                {/* nom d'équipe */}
                <div className="team" id="teamRight">
                    <div className="teamColor" id="teamColorRight"></div>
                    <p id="teamNameRight">Équipe 2</p>
                </div>
                {/* logo */}
                <div className="logoTeam" id="logoRight">
                    <img src={USALogo} alt="Logo équipe 2" />
                </div>
            </div>
            <div className="cards">
                {/* cards for team members or scores can be added here */}
            </div>
        </div>
    )
};
export default TeamRight;