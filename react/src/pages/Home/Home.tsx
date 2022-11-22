import React, { ReactElement } from "react";
import Section from "../../lib/Section/Section";
import NewsCarousel from "./lib/NewsCarousel";

function Home(): ReactElement {
    return (
        <>
            <Section title="LATEST NEWS" ornament>
                <NewsCarousel/>
            </Section>

            <Section title="KEY FEATURES" ornament alternative/>
        </>
    );
}

export default Home;