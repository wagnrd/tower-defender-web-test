<script lang="ts">
    export let disabled = false;
</script>

<div class="button">
    <slot></slot>
</div>

<style>
    .button {
        padding: 0 2.3rem 0 2.3rem;
        font-family: var(--subheadline-font-family);
        font-size: 1.2rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>