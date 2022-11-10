<script lang="ts">
    let scrollY: number;

    function scrollToTop() {
        scrollY = 0;
    }
</script>

<svelte:window bind:scrollY={scrollY} use:scrollToTop/>
<div>
    <slot/>
</div>

<style>
</style>