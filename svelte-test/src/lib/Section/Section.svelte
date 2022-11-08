<script lang="ts">
    import { isMobileState } from "../screen-store";
    import Title from "./lib/Title.svelte";

    export let title = "";
    export let ornament = false;
    export let right = false;

    let isMobile = false;
    isMobileState.subscribe(value => isMobile = value);
</script>

<div id="section" class:right={right} class:mobile={isMobile}>
    {#if ornament && !isMobile}
        <div id="left">
            <div class="ornament"></div>
        </div>
    {/if}

    <div id="middle">
        <Title>{title}</Title>
        <div id="content">
            <slot/>
        </div>
    </div>

    {#if ornament && !isMobile}
        <div id="right">
            <div class="ornament"></div>
        </div>
    {/if}
</div>

<style>
    #section {
        width: 100%;
        height: max-content;
        margin: 6rem 0 11rem 0;
        display: flex;
        justify-content: center;
    }

    #section.mobile {
        margin-top: 4.5rem;
    }

    #left {
        filter: drop-shadow(0.45rem 0.45rem 0.2rem var(--shadow-color));
    }

    #left .ornament {
        clip-path: polygon(
                0% 0%,
                100% 0%,
                0% 100%
        );
    }

    #right {
        display: flex;
        justify-content: end;
        align-items: end;
        filter: drop-shadow(-0.45rem -0.45rem 0.2rem var(--shadow-color));
    }

    #right .ornament {
        clip-path: polygon(
                100% 0%,
                100% 100%,
                0% 100%
        );
    }

    .ornament {
        height: 30rem;
        width: 30rem;
        background-color: var(--base-color);
    }

    #middle {
        width: 100%;
        min-width: 35em;
        margin: 0 3rem 0 3rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .mobile #middle {
        min-width: unset;
        margin: 0;
    }

    #content {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 7rem 0 7rem 0;
    }

    .mobile #content {
        margin: 5rem 1.5rem 0 1.5rem;
    }
</style>