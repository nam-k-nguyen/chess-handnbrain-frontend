import "./Mode.css";
import { MODES } from "../const/modes";
import { useState } from "react";
import { useNavigate } from "react-router";

function Mode() {
    const [selectedGenre, setSelectedGenre] = useState("Solo Play");
    const navigate = useNavigate();

    const changeGenre = (e) => {
        if (!e.target.classList.contains("genre")) return;
        setSelectedGenre(e.target.innerText);
    };

    const getSelectedClass = (genre) =>
        genre == selectedGenre ? " selected" : "";

    const handleModeClick = (e) => {
        console.log(e.currentTarget)
        const modeId = e.currentTarget.classList[1];
        navigate("/play")
    }
    
    return (
        <div className="mode-page-container">
            <div className="genres" onClick={changeGenre}>
                {MODES.map((mode) => (
                    <button
                        key={mode.genre}
                        className={"button-genre genre" + getSelectedClass(mode.genre)}
                    >
                        {mode.genre}
                    </button>
                ))}
            </div>

            <div className="modes">
                {MODES.map((mode) => (
                    <div
                        key={mode.genre}
                        className={"mode-group" + getSelectedClass(mode.genre)}
                    >
                        {mode.modes.map((mode) => (
                            <button key={mode.name} className={"button-mode mode " + mode.id} onClick={handleModeClick}>
                                <div className="mode-name">{mode.name}</div>
                                <div className="mode-description">
                                    {mode.description}
                                </div>
                            </button>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Mode;
