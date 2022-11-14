import "./App.css";
import { ReactElement, useEffect } from "react";
import NavBar from "./lib/NavBar/NavBar";
import { useApp } from "./lib/AppProvider";

const defaultPixelRatio = 16 / 9;

function App(): ReactElement {
    const { isMobile, setMobile } = useApp();

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

    return (
        <NavBar/>
    );
}

export default App;