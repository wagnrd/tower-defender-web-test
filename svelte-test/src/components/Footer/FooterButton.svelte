<script lang="ts">
    import {navigate} from "svelte-routing";

    export let route = "";
    export let onClick = () => navigate(route);
</script>

<div on:click={onClick} class="button">
    <slot></slot>
</div>

<style>
    .button {
        font: var(--body-font-size) var(--subheadline-font-family);
        margin: 0 1.5rem 0 1.5rem;
        cursor: pointer;
        -webkit-user-select: none; /* Safari */
        user-select: none;
    }
</style>