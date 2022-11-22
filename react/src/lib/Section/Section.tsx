import styles from "./Section.module.css";
import React, { ReactElement } from "react";
import classnames from "classnames";
import Title from "./Title";
import { useApp } from "../AppProvider";

interface SectionProps {
    title?: string;
    ornament?: boolean;
    alternative?: boolean;
    children?: ReactElement | ReactElement[];
}

function Section({ title, ornament = false, alternative, children }: SectionProps): ReactElement {
    const { isMobile } = useApp();

    return (
        <div className={classnames(styles.section, isMobile && styles.mobile, alternative && styles.alternative)}>
            {ornament && !isMobile && <>
                <div className={styles.left}>
                    <div className={styles.ornament}></div>
                </div>
            </>}

            <div className={styles.middle}>
                {title && <Title>{title}</Title>}
                <div className={styles.content}>
                    {children}
                </div>
            </div>

            {ornament && !isMobile && <>
                <div className={styles.right}>
                    <div className={styles.ornament}></div>
                </div>
            </>}
        </div>
    );
}

export default Section;