import "./PlayerBox.css";
import profileImg from "../assets/pawn_profile.jpg";

function PlayerBox({ imgLink = profileImg, name = "John", role = "Player", reverse = false }) {
    return (
        <div className={"player-box-container" + (reverse ? " reverse" : "")}>
            <div className="player-pic">
                <img src={imgLink} alt="Player" />
            </div>
            <div className="player-name-and-role">
                <div className="player-name">{name}</div>
                <div className="player-role">{role}</div>
            </div>
        </div>
    );
}

export default PlayerBox;
