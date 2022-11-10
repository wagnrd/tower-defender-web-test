<script lang="ts">
    import Page from "../lib/Page.svelte";
    import Section from "../lib/Section/Section.svelte";
    import { fetchArticleById } from "../lib/news-articles";
    import { formatDate } from "../lib/utils.js";

    export let id: number;
</script>

<Page>
    {#await fetchArticleById(id)}
        <Section title="Loading..."/>
    {:then article}
        <Section title={article.headline}>
            <div>
                <h2>{formatDate(article.timestamp)}</h2>
                <p id="article-body">{@html article.body}</p>
            </div>
        </Section>
    {:catch error}
        <Section title="Error"/>
    {/await}
</Page>

<style>
    #article-body {
        margin-top: 2rem;
    }
</style>