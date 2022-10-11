<script lang="ts">
    import Section from "../../components/Section.svelte";
    import armouredTruckImage from "../../assets/armoured-truck.png";
    import bigGun2Image from "../../assets/big-gun-2.png";
    import NewsCarousel from "./components/NewsCarousel/NewsCarousel.svelte";
    import KeyFeature from "./components/KeyFeature.svelte";
</script>

<div id="page">
    <Section title="LATEST NEWS" right>
        <div id="news-carousel">
            <NewsCarousel/>
        </div>
        <img src={armouredTruckImage} id="latest-news-section-image" alt="Armoured truck"/>
    </Section>

    <Section title="KEY FEATURES">
        <img src={bigGun2Image} id="key-features-section-image" alt="big gun"/>
        <div id="key-features">
            <KeyFeature title="KEY FEATURE 1">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et
                ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </KeyFeature>
            <KeyFeature title="KEY FEATURE 2">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et
                ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
                magna aliquyam erat, sed diam voluptua.
            </KeyFeature>
            <KeyFeature title="KEY FEATURE 3">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et
                ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </KeyFeature>
            <KeyFeature title="KEY FEATURE 4">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et
                ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr.
            </KeyFeature>
        </div>
    </Section>
</div>

<style>
    #page {
        margin-top: 10rem;
    }

    #news-carousel {
        margin: 6rem 1.5rem 0 0;
    }

    #latest-news-section-image {
        width: 33rem;
        object-fit: contain;
        margin-right: 3rem;
    }

    #key-features {
        max-width: 43rem;
        margin: 13rem 0 0 3rem;
    }

    #key-features-section-image {
        width: 36rem;
        object-fit: contain;
        margin: 3.5rem 0 0 3rem;
    }
</style>