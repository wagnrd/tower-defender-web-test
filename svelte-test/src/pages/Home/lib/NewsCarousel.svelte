<script lang="ts">
    import { Link } from "svelte-routing";
    import { swipe } from "svelte-gestures";
    import type { ArticlePreview } from "../../../lib/news-articles";
    import { fetchArticlePreviews } from "../../../lib/news-articles";
    import logoDarkImage from "../../../assets/images/logo-dark.svg";
    import { isMobileState } from "../../../lib/screen-store";
    import type { LoadingState } from "../../../lib/laoding-state";
    import { formatDate } from "../../../lib/utils.js";

    const maxArticles = 4;
    let currentArticleIndex = 0;
    let articles: ArticlePreview[] = [];
    let loadingState: LoadingState = "loading";

    fetchArticlePreviews(maxArticles).then(result => {
        loadingState = "done";
        articles = result;
        startArticleAutoChangeTimer(defaultArticleAutoChangeDelayMs);
    }).catch(error => {
        loadingState = "error";
    });

    const showPreviousArticle = () => {
        resetArticleAutoChangeTimer();
        currentArticleIndex = Math.max(currentArticleIndex - 1, 0);
    };

    const showNextArticle = () => {
        resetArticleAutoChangeTimer();
        currentArticleIndex = Math.min(currentArticleIndex + 1, articles.length - 1);
    };

    const showArticle = (index: number) => {
        resetArticleAutoChangeTimer();
        currentArticleIndex = index;
    };

    $: articleClass = (articleIndex: number): string => articleIndex == currentArticleIndex ?
                                                        "article-visible" :
                                                        "article-hidden";
    $: pageIndicatorButtonClass = (buttonIndex: number): string => buttonIndex == currentArticleIndex ?
                                                                   "active" :
                                                                   "inactive";
    $: showPreviousButtonClass = currentArticleIndex == 0 ? "hidden" : "visible";
    $: showNextButtonClass = currentArticleIndex == articles.length - 1 ? "hidden" : "visible";

    const defaultArticleAutoChangeDelayMs = 7000;
    const interruptedPageAutoChangeDelayMs = 15000;
    let articleChangeTimer: NodeJS.Timeout;

    const resetArticleAutoChangeTimer = () => {
        clearTimeout(articleChangeTimer);
        startArticleAutoChangeTimer(interruptedPageAutoChangeDelayMs);
    };

    const startArticleAutoChangeTimer = (ms: number) => {
        articleChangeTimer = setTimeout(() => {
            currentArticleIndex = (currentArticleIndex + 1) % articles.length;
            startArticleAutoChangeTimer(defaultArticleAutoChangeDelayMs);
        }, ms);
    };

    let isMobile = false;
    isMobileState.subscribe(value => isMobile = value);

    const onCarouselSwipe = (event: any) => {
        if (event.detail.direction === "right") {
            showPreviousArticle();
        } else if (event.detail.direction === "left") {
            showNextArticle();
        }
    };
</script>

<div id="carousel" class:mobile={isMobile} use:swipe={{timeframe: 300, minSwipeDistance: 60, touchAction: "pan-y"}}
     on:swipe={onCarouselSwipe}>
    {#if loadingState === "done" && articles.length > 0}
        <div id="content">
            <div class="pagination-button left clickable {showPreviousButtonClass}" on:click={showPreviousArticle}>
                <div class="arrow"></div>
            </div>
            <div class="pagination-button right clickable {showNextButtonClass}" on:click={showNextArticle}>
                <div class="arrow"></div>
            </div>

            {#each articles as article, i}
                <h2 class="headline {articleClass(i)}">{article.headline}</h2>
                {#if isMobile}
                    <p class="date {articleClass(i)}">{formatDate(article.timestamp)}</p>
                {:else}
                    <h3 class="date {articleClass(i)}">{formatDate(article.timestamp)}</h3>
                {/if}
                <img src={article.thumbnailUrl ?? logoDarkImage} class="carousel-image {articleClass(i)}"
                     alt="{article.headline} image"/>
                <div class="description {articleClass(i)}">
                    {article.description}<br/>
                    <br/>
                    <Link to="/news/{article.id}">Read news</Link>
                </div>
            {/each}

            <div id="pagination-indicators">
                {#each articles as _, i}
                    <div class="pagination-indicator-button clickable {pageIndicatorButtonClass(i)}"
                         on:click={() => showArticle(i)}></div>
                {/each}
            </div>
        </div>
    {:else if loadingState === "loading"}
        <h2 class="visible">News loading...</h2>
    {:else if loadingState === "error"}
        <h2 class="visible">Error loading news :(</h2>
    {:else}
        <h2 class="visible">No news</h2>
    {/if}
</div>

<style>
    #carousel {
        width: 49rem;
        max-width: 100vw;
        height: 17rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .mobile#carousel {
        height: min-content;
    }

    #content {
        display: grid;
        grid-column-gap: 1.6rem;
        align-items: center;
        animation: show 300ms 300ms both;
    }

    .mobile #content {
        grid-column-gap: 0;
    }

    .headline {
        grid-row: 1;
        grid-column: 2 / 4;
    }

    .mobile .headline {
        grid-column: 2;
    }

    .date {
        margin: 0.2rem 0 1rem;
        grid-row: 2;
        grid-column: 2;
    }

    .carousel-image {
        width: 19rem;
        object-fit: contain;
        grid-row: 3;
        grid-column: 2;
    }

    .mobile .carousel-image {
        width: 100%;
    }

    .description {
        grid-row: 3;
        grid-column: 3;
    }

    .mobile .description {
        grid-row: 4;
        grid-column: 2;
        margin-top: 1rem;
    }

    .pagination-button {
        width: 1.3rem;
        height: 2.6rem;
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

    .mobile .pagination-button.left {
        grid-row: 3 / 4;
        margin: 0 1.4rem 0 1.1rem;
    }

    .pagination-button.right {
        grid-row: 3;
        grid-column: 4;
        transform: scaleX(-1);
        margin-left: 1.3rem;
    }

    .mobile .pagination-button.right {
        grid-row: 3 / 4;
        margin: 0 1.1rem 0 1.4rem;
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
            visibility: visible;
        }
        to {
            opacity: 0;
            visibility: hidden;
        }
    }

    @keyframes show {
        from {
            opacity: 0;
            visibility: hidden;
        }
        to {
            opacity: 1;
            visibility: visible;
        }
    }

    #pagination-indicators {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1.5rem;
        width: 100%;
        margin-top: 2rem;
        grid-row: 4;
        grid-column: 2 / 4;
    }

    .mobile #pagination-indicators {
        grid-row: 5;
        grid-column: 2;
    }

    .pagination-indicator-button {
        width: 1rem;
        height: 1rem;
        border-radius: 100%;
    }

    .mobile .pagination-indicator-button {
        width: 1.3rem;
        height: 1.3rem;
        border-radius: 100%;
    }

    .active.pagination-indicator-button {
        animation: paint-activated 300ms 200ms both;
    }

    .inactive.pagination-indicator-button {
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