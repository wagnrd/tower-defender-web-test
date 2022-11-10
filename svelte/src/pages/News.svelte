<script lang="ts">
    import Page from "../lib/Page.svelte";
    import Section from "../lib/Section/Section.svelte";
    import type { ArticlePreview } from "../lib/news-articles";
    import { fetchArticlePreviews } from "../lib/news-articles";
    import { isMobile } from "../lib/screen-store";
    import { Link } from "svelte-routing";
    import logoDarkImage from "../assets/images/logo-dark.svg";
    import type { LoadingState } from "../lib/utils";
    import { formatDate } from "../lib/utils";

    const articleBatchSize = 4;
    let loadingState: LoadingState = "loading";
    let articles: ArticlePreview[] = [];

    fetchArticlePreviews(articleBatchSize, 0)
        .then(articlePreviews => {
            articles = articlePreviews;
            loadingState = "done";
        })
        .catch(_ => loadingState = "error");

    let lastArticleNode: HTMLElement;

    const setLastArticleElement = (node: HTMLElement) => lastArticleNode = node;

    let scrollY: number;

    const checkIfLastArticleIsVisible = async (y: number): Promise<void> => {
        if (loadingState != "done") return;

        const lastItemTriggerOffset = lastArticleNode?.offsetTop - screen.height;

        if (lastItemTriggerOffset < y) {
            loadingState = "loading";
            const articlePreviews = await fetchArticlePreviews(articleBatchSize, articles.length);
            articles = [...articles, ...articlePreviews];
            loadingState = "done";
        }
    };

    $: checkIfLastArticleIsVisible(scrollY);
</script>

<svelte:window bind:scrollY={scrollY}/>
<Page topGap>
    <Section title="NEWS">
        <div id="articles" class:mobile={$isMobile}>
            {#if articles.length > 0}
                {#each articles as article}
                    <div class="article" use:setLastArticleElement>
                        <img src={article.thumbnailUrl ?? logoDarkImage} class="carousel-image"
                             alt="{article.headline} image"/>
                        <h2 class="headline">{article.headline}</h2>
                        {#if $isMobile}
                            <p class="date">{formatDate(article.timestamp)}</p>
                        {:else}
                            <h3 class="date">{formatDate(article.timestamp)}</h3>
                        {/if}
                        <div class="description">
                            {article.description}<br/>
                            <br/>
                            <Link to="/news/{article.id}">Read news</Link>
                        </div>
                    </div>
                    <div class="article-separator"></div>
                {/each}
            {:else}
                <h2>No news</h2>
            {/if}

            {#if loadingState === "loading"}
                <h2>News loading...</h2>
            {:else if loadingState === "error"}
                <h2>Error loading news :(</h2>
            {/if}
        </div>
    </Section>
</Page>

<style>
    #articles {
        width: 53rem;
        display: flex;
        flex-direction: column;
        row-gap: 5rem;
    }

    #articles.mobile {
        width: unset;
    }

    .article {
        display: grid;
        grid-column-gap: 1.6rem;
        align-items: center;
    }

    .article-separator:not(.article-separator:last-of-type) {
        height: 0.05rem;
        width: 70%;
        background-color: var(--text-color);
        margin: 0 auto 0 auto;
    }

    .headline {
        grid-row: 1;
        grid-column: 2;
    }

    .mobile .headline {
        grid-column: 1;
    }

    .date {
        margin: 0.2rem 0 1rem;
        grid-row: 2;
        grid-column: 2;
    }

    .mobile .date {
        grid-column: 1;
    }

    .carousel-image {
        width: 19rem;
        object-fit: contain;
        grid-row: 1 / 4;
        grid-column: 1;
    }

    .mobile .carousel-image {
        width: 100%;
        grid-row: 3;
    }

    .description {
        grid-row: 3;
        grid-column: 2;
    }

    .mobile .description {
        grid-row: 4;
        grid-column: 1;
        margin-top: 1rem;
    }
</style>