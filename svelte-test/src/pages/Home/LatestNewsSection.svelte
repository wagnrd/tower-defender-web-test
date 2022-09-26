<script lang="ts">
    import Section from "../../components/Section.svelte";
    import armouredTruckImage from "../../assets/armoured-truck.png";
    import newsPictureThumbnailImage from "../../assets/news-picture-thumbnail.jpg";
</script>

<Section class="test" heading="LATEST NEWS" right>
    <div class="carousel">
        <div class="arrow left"></div>
        <h2 class="headline">SOME NEWS TITLE!</h2>
        <img src={newsPictureThumbnailImage} class="carousel-image"/>
        <div class="description">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
            labore et dolore magna aliquyam erat. At vero eos et accusam et justo duo dolores et ea rebum.
        </div>
        <div class="arrow right"></div>
    </div>
    <img src={armouredTruckImage} class="section-image"/>
</Section>

<style>
    .section-image {
        width: 33rem;
        object-fit: contain;
        margin: -1.8rem 2rem;
    }

    .carousel {
        width: 49rem;
        height: min-content;
        margin: 4.5rem -2.5rem 0 0;
        display: grid;
        grid-column-gap: 1.6rem;
        align-items: center;
    }

    .headline {
        grid-row: 1;
        grid-column: 2 / 3;
    }

    .carousel-image {
        width: 19rem;
        object-fit: contain;
        grid-row: 2;
        grid-column: 2;
    }

    .description {
        grid-row: 2;
        grid-column: 3;
    }

    .arrow {
        width: 1.3rem;
        height: 2.6rem;
        background-color: var(--text-color);
        clip-path: polygon(
                100% 0%,
                0% 50%,
                100% 100%,
                100% 80%,
                42% 50%,
                100% 20%
        );
    }

    .arrow.left {
        grid-row: 2;
        grid-column: 1;
        margin-right: 1.6rem;
    }

    .arrow.right {
        grid-row: 2;
        grid-column: 4;
        transform: scaleX(-1);
        margin-left: 1.3rem;
    }
</style>