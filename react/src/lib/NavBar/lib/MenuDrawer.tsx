import React, { ReactElement } from "react";
import styles from "./MenuDrawer.module.css";
import classnames from "classnames";

interface MenuDrawerProps {
    active: boolean;
    onOverlayClick: () => void;
    onMenuItemClick: () => void;
    children: ReactElement[];
}

function MenuDrawer({ active, onOverlayClick, onMenuItemClick, children }: MenuDrawerProps): ReactElement {
    const overlayClassNames = classnames(!active && styles.inactive);
    const drawerClassNames = classnames(!active && styles.inactive);

    return (
        <div className={`${overlayClassNames} ${styles.overlay} clickable`} onClick={onOverlayClick}>
            <div className={`${drawerClassNames} ${styles.drawer}`} onClick={onMenuItemClick}>
                {children}
            </div>
        </div>
    );
}

export default MenuDrawer;