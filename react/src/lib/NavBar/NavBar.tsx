import { ReactElement } from "react";
import "./NavBar.css";
import { useApp } from "../AppProvider";

function NavBar(): ReactElement {
    const { isMobile } = useApp();

    console.log(isMobile);

    return (
        <></>
    );
}

export default NavBar;