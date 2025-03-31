import { BrowserRouter, Routes, Route } from "react-router";
import "./BodySection.css";
import Home from "../pages/Home.jsx";
import Mode from "../pages/Mode.jsx";
import Play from "../pages/Play.jsx";
import Info from "../pages/Info.jsx";

function BodySection() {
    return (
        <div className="body-section">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/mode" element={<Mode />} />
                    <Route path="/play" element={<Play />} />
                    <Route path="/info" element={<Info />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default BodySection;
