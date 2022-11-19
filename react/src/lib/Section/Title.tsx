import "./Title.css";
import React, { ReactElement } from "react";
import { useApp } from "../AppProvider";

interface TitleProps {
    children?: string;
}

function Title({ children }: TitleProps): ReactElement {
    const { isMobile } = useApp();

    return (
        <div id="title">
            {!isMobile && <>
                <div id="title-ornament"></div>
                <div id="title-left"></div>
            </>}

            <div id="title-content">
                {children}
            </div>
            <div id="title-right"></div>
        </div>
    );
}

export default Title;