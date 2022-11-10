<script lang="ts">
    import { Link } from "svelte-routing";
    import { swipe } from "svelte-gestures";
    import logoDarkImage from "../../../assets/images/logo-dark.svg";
    import type { LoadingState } from "../../../lib/utils";
    import { formatDate } from "../../../lib/utils";
    import type { ArticlePreview } from "../../../lib/news-articles";
    import { fetchArticlePreviews } from "../../../lib/news-articles";
    import { isMobile } from "../../../lib/screen-store";

    const defaultArticleAutoChangeDelayMs = 7000;
    const interruptedPageAutoChangeDelayMs = 15000;
    const maxArticles = 4;
    let currentArticleIndex = 0;
    let articles: ArticlePreview[] = [];
    let loadingState: LoadingState = "loading";
    let articleChangeTimer: NodeJS.Timeout;

    function showPreviousArticle() {
        resetArticleAutoChangeTimer();
        currentArticleIndex = Math.max(currentArticleIndex - 1, 0);
    }

    function showNextArticle() {
        resetArticleAutoChangeTimer();
        currentArticleIndex = Math.min(currentArticleIndex + 1, articles.length - 1);
    }

    function showArticle(index: number) {
        resetArticleAutoChangeTimer();
        currentArticleIndex = index;
    }

    function resetArticleAutoChangeTimer() {
        clearTimeout(articleChangeTimer);
        startArticleAutoChangeTimer(interruptedPageAutoChangeDelayMs);
    }

    function startArticleAutoChangeTimer(ms: number) {
        articleChangeTimer = setTimeout(() => {
            currentArticleIndex = (currentArticleIndex + 1) % articles.length;
            startArticleAutoChangeTimer(defaultArticleAutoChangeDelayMs);
        }, ms);
    }

    function onCarouselSwipe(event: any) {
        if (event.detail.direction === "right") {
            showPreviousArticle();
        } else if (event.detail.direction === "left") {
            showNextArticle();
        }
    }

    $: articleClass = (articleIndex: number): string => articleIndex == currentArticleIndex ?
                                                        "article-visible" :
                                                        "article-hidden";
    $: pageIndicatorButtonClass = (buttonIndex: number): string => buttonIndex == currentArticleIndex ?
                                                                   "active" :
                                                                   "inactive";
    $: showPreviousButtonClass = currentArticleIndex == 0 ? "hidden" : "visible";
    $: showNextButtonClass = currentArticleIndex == articles.length - 1 ? "hidden" : "visible";

    fetchArticlePreviews(maxArticles).then(result => {
        loadingState = "done";
        articles = result;
        startArticleAutoChangeTimer(defaultArticleAutoChangeDelayMs);
    }).catch(error => {
        loadingState = "error";
    });
</script>

<div id="carousel" class:mobile={$isMobile} use:swipe={{timeframe: 300, minSwipeDistance: 60, touchAction: "pan-y"}}
     on:swipe={onCarouselSwipe}>
    {#if loadingState === "done" && articles.length > 0}
        <div id="content">
            <div class="pagination-button left clickable {showPreviousButtonClass}" on:click={showPreviousArticle}>
                <div class="inner"></div>
            </div>

            {#each articles as article, i}
                <h2 class="headline {articleClass(i)}">{article.headline}</h2>
                {#if $isMobile}
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

            <div class="pagination-button right clickable {showNextButtonClass}" on:click={showNextArticle}>
                <div class="inner"></div>
            </div>

            <div id="pagination-indicators">
                {#each articles as _, i}
                    <div class="pagination-indicator-button clickable {pageIndicatorButtonClass(i)}"
                         on:click={() => showArticle(i)}>
                        <div class="inner"></div>
                    </div>
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
        min-width: 48rem;
        height: 17rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .mobile#carousel {
        height: min-content;
        min-width: unset;
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

    .pagination-button .inner {
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

    .pagination-button:hover > .inner {
        background-color: var(--contrast-color);
    }

    .pagination-button.left {
        grid-row: 3;
        grid-column: 1;
        margin-right: 1.6rem;
    }

    .mobile .pagination-button.left {
        grid-row: 3 / 4;
    }

    .pagination-button.right {
        grid-row: 3;
        grid-column: 4;
        transform: scaleX(-1);
        margin-left: 1.3rem;
    }

    .mobile .pagination-button.right {
        grid-row: 3 / 4;
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
        gap: 0.8rem;
        width: 100%;
        margin-top: 1.7rem;
        grid-row: 4;
        grid-column: 2 / 4;
    }

    .mobile #pagination-indicators {
        grid-row: 5;
        grid-column: 2;
    }

    .pagination-indicator-button {
        width: 1.5rem;
        height: 1.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .pagination-indicator-button .inner {
        border-radius: 100%;
        background-color: var(--text-color);
        transition: background-color 300ms;
    }

    .pagination-indicator-button:hover .inner {
        background-color: var(--contrast-color);
    }

    .active.pagination-indicator-button .inner {
        animation: activate-pagination-indicator-button 300ms 200ms both;
    }

    .inactive.pagination-indicator-button .inner {
        animation: deactivate-pagination-indicator-button 300ms both;
    }

    @keyframes activate-pagination-indicator-button {
        from {
            width: 0.4rem;
            height: 0.4rem;
        }
        to {
            width: 0.8rem;
            height: 0.8rem;
        }
    }

    @keyframes deactivate-pagination-indicator-button {
        from {
            width: 0.8rem;
            height: 0.8rem;
        }
        to {
            width: 0.4rem;
            height: 0.4rem;
        }
    }
</style>