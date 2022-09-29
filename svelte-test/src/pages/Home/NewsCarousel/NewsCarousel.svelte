<script lang="ts">
    import {fetchLatestNewsArticles} from "./NewsArticles";
    import type {ShortArticle} from "./NewsArticles";
    import logoDarkImage from "../../../assets/logo-dark.svg";

    let currentArticleIndex = 0;
    let articles: ShortArticle[] = [];

    fetchLatestNewsArticles().then(result => {
        articles = result;
        console.log(articles);
        startArticleAutoChangeTimer(defaultArticleAutoChangeDelayMs);
    });

    const showPreviousArticle = () => {
        resetArticleAutoChangeTimer();
        currentArticleIndex = Math.max(currentArticleIndex - 1, 0);
    }

    const showNextArticle = () => {
        resetArticleAutoChangeTimer();
        currentArticleIndex = Math.min(currentArticleIndex + 1, articles.length - 1);
    }

    const showArticle = (index: number) => {
        resetArticleAutoChangeTimer();
        currentArticleIndex = index;
    }

    $: articleClass = (articleIndex: number): string => articleIndex == currentArticleIndex ? "article-visible" : "article-hidden";
    $: pageIndicatorButtonClass = (buttonIndex: number): string => buttonIndex == currentArticleIndex ? "active" : "inactive";
    $: showPreviousButtonClass = currentArticleIndex == 0 ? "hidden" : "visible";
    $: showNextButtonClass = currentArticleIndex == articles.length - 1 ? "hidden" : "visible";

    const defaultArticleAutoChangeDelayMs = 7000;
    const interruptedPageAutoChangeDelayMs = 15000;
    let articleChangeTimer: NodeJS.Timer;

    const resetArticleAutoChangeTimer = () => {
        clearTimeout(articleChangeTimer);
        startArticleAutoChangeTimer(interruptedPageAutoChangeDelayMs);
    }

    const startArticleAutoChangeTimer = (ms: number) => {
        articleChangeTimer = setTimeout(() => {
            currentArticleIndex = (currentArticleIndex + 1) % articles.length;
            startArticleAutoChangeTimer(defaultArticleAutoChangeDelayMs);
        }, ms);
    }
</script>

<div id="carousel">
    {#if articles.length > 0}
        <div id="content">
            <div class="pagination-button left {showPreviousButtonClass}" on:click={showPreviousArticle}>
                <div class="arrow"></div>
            </div>
            <div class="pagination-button right {showNextButtonClass}" on:click={showNextArticle}>
                <div class="arrow"></div>
            </div>
            {#each articles as article, i}
                <h2 class="headline {articleClass(i)}">{article.headline}</h2>
                <h3 class="date {articleClass(i)}">{article.date}</h3>
                <img src={article.imageUrl ?? logoDarkImage} class="carousel-image {articleClass(i)}"/>
                <div class="description {articleClass(i)}">{article.description}</div>
            {/each}
            <div id="pagination-indicators">
                {#each articles as _, i}
                    <div class="pagination-indicator-button {pageIndicatorButtonClass(i)}"
                         on:click={() => showArticle(i)}>
                        <div class="triangle"></div>
                    </div>
                {/each}
            </div>
        </div>
    {:else}
        <h2 class="visible">News loading...</h2>
    {/if}
</div>

<style>
    #carousel {
        width: 49rem;
        height: 17rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    #content {
        display: grid;
        grid-column-gap: 1.6rem;
        align-items: center;
        animation: show 300ms 300ms both;
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
        cursor: auto;
    }

    .hidden {
        animation-name: hide;
        animation-duration: 300ms;
        animation-fill-mode: both;
    }

    .visible {
        animation-name: show;
        animation-duration: 300ms;
        animation-delay: 200ms;
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
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    #pagination-indicators {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.4rem;
        width: 100%;
        margin-top: 1.5rem;
        grid-row: 4;
        grid-column: 2 / 4;
    }

    .pagination-indicator-button {
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