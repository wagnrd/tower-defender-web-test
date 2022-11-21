import React, { ReactElement } from "react";
import styles from "./HamburgerButton.module.css";
import classnames from "classnames";

interface HamburgerButtonProps {
    active: boolean;
    onClick: () => void;
}

function HamburgerButton({ active, onClick }: HamburgerButtonProps): ReactElement {
    const barsClassNames = classnames(active && styles.active);

    return (
        <div className={`${styles.hamburger} clickable`} onClick={onClick}>
            <div className={`${barsClassNames} ${styles.bars}`}>
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>
            </div>
        </div>
    );
}

export default HamburgerButton;