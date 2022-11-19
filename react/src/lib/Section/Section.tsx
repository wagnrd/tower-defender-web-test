import "./Section.css";
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
    const sectionClassName = classnames({ alternative });

    return (
        <div id="section" className={sectionClassName}>
            {ornament && !isMobile && <>
                <div className="left">
                    <div className="ornament"></div>
                </div>
            </>}

            <div className="middle">
                {title && <Title>{title}</Title>}
                <div className="content">
                    {children}
                </div>
            </div>

            {ornament && !isMobile && <>
                <div className="right">
                    <div className="ornament"></div>
                </div>
            </>}
        </div>
    );
}

export default Section;