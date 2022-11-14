import "./App.css";
import React, { ReactElement, useEffect } from "react";
import { useApp } from "./lib/AppProvider";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import News from "./pages/News";
import Game from "./pages/Game";
import Download from "./pages/Download";
import NavBar from "./lib/NavBar/NavBar";
import NavBarButton from "./lib/NavBar/NavBarButton";

const defaultPixelRatio = 16 / 9;

function App(): ReactElement {
    const { isMobile, setMobile } = useApp();
    const navigate = useNavigate();

    useEffect(() => {
        window.onresize = () => {
            const pixelRatio = screen.width / screen.height;
            const mobileThreshold = 1 - (0.4 / defaultPixelRatio * pixelRatio);

            if (window.innerWidth <= screen.width * mobileThreshold ||
                window.matchMedia("screen and (max-device-width: 1000px)").matches) {
                setMobile(true);
            } else {
                setMobile(false);
            }
        };
    }, []);

    const homeRoute = "/";
    const newsRoute = "/news";
    const gameRoute = "/game";
    const downloadRoute = "/download";

    const goToHome = () => navigate(homeRoute);
    const goToNews = () => navigate(newsRoute);
    const goToGame = () => navigate(gameRoute);
    const goToDownload = () => navigate(downloadRoute);
    const goToForums = () => window.open("https://" + window.location.host + "/forums/");

    return (
        <>
            <NavBar onHomeClick={goToHome}>
                <NavBarButton onClick={goToNews} text="NEWS"/>
                <NavBarButton onClick={goToGame} text="Game"/>
                <NavBarButton onClick={goToForums} text="FORUMS"/>
                <NavBarButton onClick={goToDownload} text="DOWNLOAD"/>
            </NavBar>

            <Routes>
                <Route path={homeRoute} element={<Home/>}/>
                <Route path={newsRoute} element={<News/>}/>
                <Route path={gameRoute} element={<Game/>}/>
                <Route path={downloadRoute} element={<Download/>}/>
            </Routes>
        </>
    );
}

export default App;