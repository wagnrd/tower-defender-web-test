import { ReactElement } from "react";
import "./NavBar.css";
import { useApp } from "../AppProvider";
import logoDarkSmallImage from "../../assets/images/logo-dark-small.svg";

interface NavBarProps {
    onHomeClick: () => {};
    children: ReactElement | ReactElement[];
}

function NavBar({ onHomeClick, children }: NavBarProps): ReactElement {
    const { isMobile } = useApp();

    console.log(isMobile);

    return (
        <div id="nav-bar">
            <div id="brand" className="clickable" onClick={onHomeClick}>
                <img src={logoDarkSmallImage} id="logo" alt="Brand logo"/>
                <div id="name">Y.A.T.D.</div>
            </div>

            <div id="buttons">
                {children}
            </div>
            <div id="bar-ornament"></div>
            <div id="contrast-ornament"></div>
        </div>
    );
}

export default NavBar;