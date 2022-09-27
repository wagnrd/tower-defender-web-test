<script lang="ts">
    import {navigate} from "svelte-routing";

    export let route = "";
</script>

<div on:click={() => navigate(route)} class="button">
    <slot></slot>
</div>

<style>
    .button {
        padding: 0.1rem 1.7rem 0 1.7rem;
        font: 1.19rem var(--subheadline-font-family);
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