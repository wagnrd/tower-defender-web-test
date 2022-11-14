import React, { ReactElement } from "react";
import "./NavBarButton.css";

interface NavBarButtonProps {
    text: string;
    onClick: () => void;
}

function NavBarButton({ onClick, text }: NavBarButtonProps): ReactElement {
    return (
        <div onClick={onClick} className="button clickable">
            {text}
        </div>
    );
}

export default NavBarButton;