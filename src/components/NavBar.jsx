import "./NavBar.css";
import { FaSun, FaMoon } from "react-icons/fa6";
import { switchToDark, switchToLight } from "../utils/theme";

function NavBar() {
    const switchTheme = () => {
        const currentTheme = localStorage.getItem("theme");
        if (currentTheme === "dark-theme") {
            switchToLight();
        } else {
            switchToDark();
        }
    };

    return (
        <nav className="navbar">
            <button className="theme-switch non-focus" onClick={switchTheme}>
                <div className="theme-button">
                    <FaSun className="sun-icon" />
                    <FaMoon className="moon-icon" />
                </div>
            </button>
            <div className="navlinks">
                <div className="navlink">
                    <a href="/">Home</a>
                </div>
                <div className="navlink">
                    <a href="/mode">Mode</a>
                </div>
                <div className="navlink">
                    <a href="/play">Play</a>
                </div>
                <div className="navlink">
                    <a href="/info">Info</a>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
