<script lang="ts">
    import Page from "../lib/Page.svelte";
    import Section from "../lib/Section.svelte";
    import { fetchArticleById } from "../lib/news-articles";
    import { isMobileState } from "../lib/screen-store";
    import { formatDate } from "../lib/utils.js";

    export let id: number;

    let isMobile = false;
    isMobileState.subscribe(value => isMobile = value);
</script>

<Page topGap>
    {#await fetchArticleById(id)}
        <Section title="Loading..."/>
    {:then article}
        <Section title={article.headline}>
            <div id="content" class:mobile={isMobile}>
                <h2>{formatDate(article.timestamp)}</h2>
                <p id="article-body">{@html article.body}</p>
            </div>
        </Section>
    {:catch error}
        <Section title="Error"/>
    {/await}
</Page>

<style>
    #content {
        max-width: 43rem;
        margin: 13rem 3rem 0 50rem;
    }

    #content.mobile {
        margin: 3rem 3rem 0 3rem;
    }

    #article-body {
        margin-top: 2rem;
    }
</style>