import FullChessboard from "../components/FullChessboard";
import PlayerBox from "../components/PlayerBox";
import "./Play.css";

function Play() {
        
    
    return (
        <div className="play-page-container">
            <div className="match-info-bar">
                <PlayerBox reverse={false}/>
                <PlayerBox reverse={true}/>
            </div>
            <div className="chessboard-container">
                <FullChessboard />
            </div>
            <div className="match-info-bar">
                <PlayerBox reverse={false}/>
                <PlayerBox reverse={true}/>
            </div>
        </div>
    );
}

export default Play;

/*

Expected theme behavior: 

- Check local storage theme
- If not set, check system theme
- If system theme is light, set theme to light
- If system theme is dark, set theme to dark

*/
