import React, { ReactElement } from "react";
import Section from "../lib/Section/Section";

function Home(): ReactElement {
    return (
        <>
            <Section title="LATEST NEWS" ornament/>
            <Section title="KEY FEATURES" ornament alternative/>
        </>
    );
}

export default Home;