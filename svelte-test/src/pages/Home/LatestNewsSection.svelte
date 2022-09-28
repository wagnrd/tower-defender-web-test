<script lang="ts">
    import Section from "../../components/Section.svelte";
    import armouredTruckImage from "../../assets/armoured-truck.png";
    import newsPictureThumbnailImage from "../../assets/news-picture-thumbnail.jpg";

    interface Article {
        headline: string;
        description: string;
        date: string;
        image?: ImageData;
    }

    let currentArticleIndex = 0;
    const articles: Article[] = [{
        headline: "Early sneak peak!",
        description: "A new concept scene of the game has been revealed! See pictures and videos of how the game might look like in the future.",
        date: "27.09.2022",
        image: newsPictureThumbnailImage
    }, {
        headline: "Some other news!",
        date: "26.09.2022",
        description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat. At vero eos et accusam et justo duo dolores et ea rebum.",
        image: newsPictureThumbnailImage
    }, {
        headline: "Again other news!",
        date: "25.09.2022",
        description: "It is quite the same but... you know... Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
        image: newsPictureThumbnailImage
    }, {
        headline: "Even more news!",
        date: "24.09.2022",
        description: "Wow! Damn! Such awesome! Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.",
        image: newsPictureThumbnailImage
    }]

    const showPreviousArticle = () => currentArticleIndex = Math.max(currentArticleIndex - 1, 0);
    const showNextArticle = () => currentArticleIndex = Math.min(currentArticleIndex + 1, articles.length - 1);
    const showArticle = (index: number) => currentArticleIndex = index;
    $: articleClass = (articleIndex: number): string => articleIndex == currentArticleIndex ? "article-visible" : "article-hidden";
    $: pageIndicatorButtonClass = (buttonIndex: number): string => buttonIndex == currentArticleIndex ? "active" : "inactive";
    $: showPreviousButtonClass = currentArticleIndex == 0 ? "hidden" : "visible";
    $: showNextButtonClass = currentArticleIndex == articles.length - 1 ? "hidden" : "visible";
</script>

<Section heading="LATEST NEWS" right>
    <div class="carousel">
        <div class="pagination-button left {showPreviousButtonClass}" on:click={showPreviousArticle}>
            <div class="arrow"></div>
        </div>
        <div class="pagination-button right {showNextButtonClass}" on:click={showNextArticle}>
            <div class="arrow"></div>
        </div>
        {#each articles as article, i}
            <h2 class="headline {articleClass(i)}">{article.headline}</h2>
            <h3 class="date {articleClass(i)}">{article.date}</h3>
            <img src={article.image} class="carousel-image {articleClass(i)}"/>
            <div class="description {articleClass(i)}">{article.description}</div>
        {/each}
        <div class="page-indicators">
            {#each articles as _, i}
                <div class="page-indicator-button {pageIndicatorButtonClass(i)}" on:click={() => showArticle(i)}>
                    <div class="triangle"></div>
                </div>
            {/each}
        </div>
    </div>
    <img src={armouredTruckImage} class="section-image"/>
</Section>

<style>
    .section-image {
        width: 33rem;
        object-fit: contain;
        margin-right: 3rem;
    }

    .carousel {
        width: 49rem;
        height: min-content;
        margin: 6rem 1.5rem 0 0;
        display: grid;
        grid-column-gap: 1.6rem;
        align-items: center;
    }

    .headline {
        grid-row: 1;
        grid-column: 2 / 4;
    }

    .date {
        margin: 0.2rem 0 1rem;
        grid-row: 2;
        grid-column: 2 / 4;
    }

    .carousel-image {
        width: 19rem;
        object-fit: contain;
        grid-row: 3;
        grid-column: 2;
    }

    .description {
        grid-row: 3;
        grid-column: 3;
    }

    .pagination-button {
        width: 1.3rem;
        height: 2.6rem;
        cursor: pointer;
    }

    .arrow {
        width: 100%;
        height: 100%;
        background-color: var(--text-color);
        transition: background-color 300ms;
        clip-path: polygon(
                100% 0%,
                0% 50%,
                100% 100%,
                100% 80%,
                42% 50%,
                100% 20%
        );
    }

    .pagination-button:hover > .arrow {
        background-color: var(--contrast-color);
    }

    .pagination-button.left {
        grid-row: 3;
        grid-column: 1;
        margin-right: 1.6rem;
    }

    .pagination-button.right {
        grid-row: 3;
        grid-column: 4;
        transform: scaleX(-1);
        margin-left: 1.3rem;
    }

    .pagination-button.hidden {
        animation-name: hide;
        animation-duration: 300ms;
        animation-fill-mode: both;
        cursor: auto;
    }

    .pagination-button.visible {
        animation-name: show;
        animation-duration: 300ms;
        animation-delay: 200ms;
        animation-direction: reverse;
        animation-fill-mode: both;
    }

    .article-hidden {
        animation-name: hide;
        animation-duration: 300ms;
        animation-fill-mode: both;
    }

    .article-visible {
        animation-name: show;
        animation-duration: 300ms;
        animation-delay: 200ms;
        animation-fill-mode: both;
        animation-direction: reverse;
    }

    @keyframes hide {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }

    @keyframes show {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }

    .page-indicators {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.4rem;
        width: 100%;
        margin-top: 1.5rem;
        grid-row: 4;
        grid-column: 2 / 4;
    }

    .page-indicator-button {
        width: 1.8rem;
        height: 0.9rem;
        cursor: pointer;
    }

    .triangle {
        width: 100%;
        height: 100%;
        clip-path: polygon(
                0% 0%,
                100% 0%,
                50% 100%
        );
    }

    .active .triangle {
        animation: paint-activated 300ms 200ms both;
    }

    .inactive .triangle {
        animation: paint-deactivated 300ms both;
    }

    @keyframes paint-activated {
        from {
            background-color: var(--text-color);
        }
        to {
            background-color: var(--contrast-color);
        }
    }

    @keyframes paint-deactivated {
        from {
            background-color: var(--contrast-color);
        }
        to {
            background-color: var(--text-color);
        }
    }
</style>