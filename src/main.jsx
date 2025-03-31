import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import NavBar from "./components/NavBar.jsx";
import BodySection from "./components/BodySection.jsx";
import { switchToDark, switchToLight } from "./utils/theme.jsx";

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark-theme") {
    switchToDark();
} else if (savedTheme === "light-theme") {
    switchToLight();
} else {
    const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
    ).matches;
    const prefersLight = window.matchMedia(
        "(prefers-color-scheme: light)"
    ).matches;
    if (prefersDark) {
        switchToDark();
    } else if (prefersLight) {
        switchToLight();
    } else {
        switchToLight();
    }
}

window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) => {
        const prefersDark = e.matches;
        if (prefersDark) {
            switchToDark();
        } else {
            switchToLight();
        }
    });

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <NavBar />
        <BodySection />
    </StrictMode>
);
