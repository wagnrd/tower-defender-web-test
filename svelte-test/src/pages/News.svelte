<script lang="ts">
    import Page from "../lib/Page.svelte";
    import Section from "../lib/Section.svelte";
    import type { ArticlePreview } from "../lib/news-articles";
    import { fetchArticlePreviews } from "../lib/news-articles";
    import type { LoadingState } from "../lib/laoding-state";
    import { isMobileState } from "../lib/screen-store";
    import { Link } from "svelte-routing";
    import logoDarkImage from "../assets/images/logo-dark.svg";
    import armouredTruckImage from "../assets/images/armoured-truck.png";

    const articleBatchSize = 10;
    let loadingState: LoadingState = "loading";
    let articles: ArticlePreview[] = [];

    fetchArticlePreviews(articleBatchSize, 0)
        .then(articlePreviews => {
            articles = articlePreviews;
            loadingState = "done";
        })
        .catch(_ => loadingState = "error");

    let isMobile = false;
    isMobileState.subscribe(value => isMobile = value);

    const formatDate = (timestamp: number): string => new Date(timestamp).toLocaleDateString();
</script>

<Page topGap>
    <Section title="NEWS" right>
        <div id="articles" class:mobile={isMobile}>
            {#if loadingState === "done" && articles.length > 0}
                {#each articles as article}
                    <div class="article">
                        <img src={article.thumbnailUrl ?? logoDarkImage} class="carousel-image"
                             alt="{article.headline} image"/>
                        <h2 class="headline">{article.headline}</h2>
                        {#if isMobile}
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
                {/each}
            {:else if loadingState === "loading"}
                <h2>News loading...</h2>
            {:else if loadingState === "error"}
                <h2>Error loading news :(</h2>
            {:else}
                <h2>No news</h2>
            {/if}
        </div>

        {#if !isMobile}
            <img src={armouredTruckImage} id="latest-news-section-image" alt="Armoured truck"/>
        {/if}
    </Section>
</Page>

<style>
    #latest-news-section-image {
        width: 33rem;
        object-fit: contain;
        margin-right: 3rem;
    }

    #articles {
        width: 55rem;
        margin: 10rem 5rem 0 3rem;
        display: flex;
        flex-direction: column;
        row-gap: 5rem;
    }

    #articles.mobile {
        width: 80%;
        margin: 3rem 0 0 0;
    }

    .article {
        display: grid;
        grid-column-gap: 1.6rem;
        align-items: center;
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