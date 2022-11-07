<script lang="ts">
    import { isMobileState } from "./screen-store";

    export let right = false;
    export let title = "";

    let isMobile = false;
    isMobileState.subscribe(value => isMobile = value);
</script>

<div id="title" class:mobile={isMobile}>
    {#if !isMobile}
        <div class="ornament"></div>
        <div class="left"></div>
    {/if}
    <div class="content">{title}</div>
    <div class="right"></div>
</div>
<div id="section" class:mobile={isMobile}>
    <slot/>
</div>

<style>
    #section {
        width: 100%;
        margin: 6rem 0 11rem 0;
        display: flex;
        justify-content: center;
    }

    #section.mobile {
        margin-top: 4.5rem;
    }

    #title {
        height: 4rem;
        margin-left: -4rem;
        display: flex;
        justify-content: center;
        align-items: center;
        filter: drop-shadow(0.45rem 0.45rem 0.2rem var(--shadow-color));
    }

    #title.mobile {
        margin: 0;
        justify-content: start;
    }

    #title > * {
        background-color: var(--base-color);
    }

    #title .content {
        height: 100%;
        min-width: 12%;
        font: var(--headline-font);
        padding: 0 2rem 0 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    #title.mobile .content {
        width: 50vw;
        min-width: max-content;
    }

    #title .left {
        min-width: 4rem;
        min-height: 4rem;
        margin-right: -1px;
        clip-path: polygon(
                100% 0%,
                100% 100%,
                0% 100%
        );
    }

    .mobile #title .left {
        clip-path: polygon(
                100% 0%,
                100% 100%,
                0% 100%
        );
    }

    #title .right {
        min-width: 4rem;
        min-height: 4rem;
        margin-left: -1px;
        clip-path: polygon(
                0% 0%,
                100% 0%,
                0% 100%
        );
    }

    #title .ornament {
        min-width: 8rem;
        min-height: 4rem;
        margin-right: -3rem;
        clip-path: polygon(
                0% 0%,
                100% 0%,
                50% 100%
        );
    }
</style>