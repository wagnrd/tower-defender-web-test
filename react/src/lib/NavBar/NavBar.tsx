import React, { ReactElement, useState } from "react";
import styles from "./NavBar.module.css";
import HamburgerButton from "./lib/HamburgerButton";
import MenuDrawer from "./lib/MenuDrawer";
import { useApp } from "../AppProvider";
import logoDarkSmallImage from "../../assets/images/logo-dark-small.svg";

interface NavBarProps {
    onHomeClick: () => void;
    children: ReactElement[];
}

function NavBar({ onHomeClick, children }: NavBarProps): ReactElement {
    const { isMobile } = useApp();
    const [isMobileMenuActive, setMobileMenuActive] = useState(false);

    const toggleMobileMenu = () => setMobileMenuActive(value => !value);

    return (
        <>
            <div className={styles.navBar}>
                <div className={`${styles.brand} clickable`} onClick={onHomeClick}>
                    <img src={logoDarkSmallImage} className={styles.logo} alt="Brand logo"/>
                    <div className={styles.name}>Y.A.T.D.</div>
                </div>
                {!isMobile
                 ? <div className={styles.buttons}>{children}</div>
                 : <div className={styles.mobileSpacer}></div>
                }
                <div className={styles.barOrnament}></div>
                <div className={styles.contrastOrnament}>
                    {isMobile && <HamburgerButton active={isMobileMenuActive} onClick={toggleMobileMenu}/>}
                </div>

                {isMobile &&
                 <MenuDrawer active={isMobileMenuActive} onOverlayClick={toggleMobileMenu}
                             onMenuItemClick={toggleMobileMenu}>
                     {children}
                 </MenuDrawer>
                }
            </div>

        </>
    );
}

export default NavBar;