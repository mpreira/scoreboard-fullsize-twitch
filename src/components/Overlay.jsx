//COMPOSANTS
import TeamLeft from './TeamLeft';
import TeamRight from './TeamRight';
import Time from './Time';
//FONCTIONS
import '../utils/Time';
import '../utils/Update';
// STYLES
import RugbyHouse from '../assets/RugbyHouseTransR2.png';
import '../App.css';
import '../styles/styles.css';

const Overlay = () => {
    return(
        <div className="App">
            <main>
                <div className="inner">
                    <div className="box">
                        <div className="period" id='halfLabel'>MT 1</div>
                        <>
                            <TeamLeft />
                            <Time />
                            <TeamRight />
                        </>
                        <div className="rugbyHouse">
                            <img src={RugbyHouse} alt="Rugby House" />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
};

export default Overlay;