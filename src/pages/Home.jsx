import { useNavigate } from "react-router";
import Button from "../components/Button";
import "./Home.css";

function Home() {
    const navigate = useNavigate();
    
    function onQuickPlay() {
        navigate("/mode");
    }
    
    function onCreateRoom() {
        navigate("/mode");
    }
    
    function onJoinRoom() {
        navigate("/play");
    }
    
    return (
        <div className="home-page-container">
            <div className="welcome-container">
                <h1>Hand and Brain Chess</h1>
            </div>
            <div className="button-container">
                <Button classes="button-a quick-play" text="Quick Play" onClick={onQuickPlay} />
                <Button classes="button-b create-room" text="Create Room" onClick={onCreateRoom} />
                <Button classes="button-b join-room" text="Join Room" onClick={onJoinRoom} />
            </div>
        </div>
    );
}

export default Home;
