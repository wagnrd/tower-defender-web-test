import { ReactElement } from "react";
import "./NavBarButton.css";

interface NavBarButtonProps {
    onClick: () => void;
    children?: string;
}

function NavBarButton({ onClick, children }: NavBarButtonProps): ReactElement {
    return (
        <div onClick={onClick} className="button clickable">
            {children}
        </div>
    );
}

export default NavBarButton;