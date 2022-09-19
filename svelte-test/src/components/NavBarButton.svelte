<script lang="ts">
    import {navigate} from "svelte-routing";

    export let route = "";

    let navigateToLink = () => navigate(route);
</script>

<div on:click={navigateToLink} class="button">
    <slot></slot>
</div>

<style>
    .button {
        padding: 0.1rem 2.3rem 0 2.4rem;
        font-family: var(--subheadline-font-family);
        font-size: 1.19rem;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        transition: background-color 200ms;
    }

    .button:hover {
        background-color: var(--highlight-color);
    }
</style>