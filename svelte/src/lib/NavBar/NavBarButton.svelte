<script lang="ts">
    import { navigate } from "svelte-routing";

    export let route = "";
    export let onClick = () => navigate(route);
</script>

<div on:click={onClick} class="button clickable">
    <slot></slot>
</div>

<style>
    .button {
        height: 3.6rem;
        padding: 0.1rem 1.7rem 0 1.7rem;
        font: 1.19rem var(--subheadline-font-family);
        display: flex;
        justify-content: center;
        align-items: center;
        transition: background-color 300ms;
    }

    .button:hover {
        background-color: var(--highlight-color);
    }
</style>