<script lang="ts">
    export let topGap = false;

    let scrollY: number;
    const scrollToTop = () => scrollY = 0;
</script>

<svelte:window bind:scrollY={scrollY} use:scrollToTop/>
<div class:top-gap={topGap}>
    <slot/>
</div>

<style>
    .top-gap {
        margin-top: 8rem;
    }
</style>