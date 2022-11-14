import { ReactElement } from "react";
import "./NavBar.css";
import { useApp } from "../AppProvider";
import logoDarkSmallImage from "../../assets/images/logo-dark-small.svg";


function NavBar(): ReactElement {
    const { isMobile } = useApp();

    console.log(isMobile);

    return (
        <div id="nav-bar">
            <div id="brand" className="clickable">
                <img src={logoDarkSmallImage} id="logo" alt="Brand logo"/>
                <div id="name">
                    Y.A.T.D.
                </div>
            </div>

            <div id="buttons">
                <slot/>
            </div>
            <div id="bar-ornament"></div>
            <div id="contrast-ornament"></div>
        </div>
    );
}

export default NavBar;