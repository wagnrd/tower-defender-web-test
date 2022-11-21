import React, { ReactElement } from "react";
import styles from "./NavBarButton.module.css";

interface NavBarButtonProps {
    text: string;
    onClick: () => void;
}

function NavBarButton({ onClick, text }: NavBarButtonProps): ReactElement {
    return (
        <div onClick={onClick} className={`${styles.button} clickable`}>
            {text}
        </div>
    );
}

export default NavBarButton;