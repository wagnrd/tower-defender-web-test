import styles from "./Title.module.css";
import React, { ReactElement } from "react";
import { useApp } from "../AppProvider";
import classnames from "classnames";

interface TitleProps {
    children: string;
}

function Title({ children }: TitleProps): ReactElement {
    const { isMobile } = useApp();

    return (
        <div className={classnames(styles.title, isMobile && styles.mobile)}>
            {!isMobile && <>
                <div className={styles.ornament}></div>
                <div className={styles.left}></div>
            </>}

            <div className={styles.content}>
                {children}
            </div>
            <div className={styles.right}></div>
        </div>
    );
}

export default Title;