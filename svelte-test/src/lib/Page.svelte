<script lang="ts">
    export let topGap = false;

    let scrollY: number;
    const reset = () => scrollY = 0;
</script>

<svelte:window bind:scrollY={scrollY} use:reset/>
<div class:top-gap={topGap}>
    <slot/>
</div>

<style>
    .top-gap {
        margin-top: 5rem;
    }
</style>