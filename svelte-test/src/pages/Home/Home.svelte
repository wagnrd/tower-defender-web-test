<script lang="ts">
    import Section from "../../components/Section.svelte";
    import armouredTruckImage from "../../assets/armoured-truck.png";
    import bigGun2Image from "../../assets/big-gun-2.png";
    import NewsCarousel from "./NewsCarousel/NewsCarousel.svelte";
</script>

<div class="page">
    <Section heading="LATEST NEWS" right>
        <div id="carousel">
            <NewsCarousel/>
        </div>
        <img src={armouredTruckImage} class="latest-news-section-image" alt="Armoured truck"/>
    </Section>

    <Section heading="KEY FEATURES">
        <img src={bigGun2Image} class="key-features-section-image" alt="big gun"/>
    </Section>
</div>

<style>
    .page {
        margin-top: 10rem;
    }

    #carousel {
        margin: 6rem 1.5rem 0 0;
    }

    .latest-news-section-image {
        width: 33rem;
        object-fit: contain;
        margin-right: 3rem;
    }

    .key-features-section-image {
        width: 35rem;
        object-fit: contain;
        margin: 3rem 0 0 2rem;
    }
</style>