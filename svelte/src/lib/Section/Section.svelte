<script lang="ts">
    import { isMobileState } from "../screen-store";
    import Title from "./lib/Title.svelte";

    export let title = "";
    export let ornament = false;
    export let alternative = false;

    let isMobile = false;
    isMobileState.subscribe(value => isMobile = value);
</script>

<div id="section" class:alternative={alternative} class:mobile={isMobile}>
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
        display: flex;
        justify-content: center;
    }

    #section.mobile {
        margin-top: 4.5rem;
    }

    #left {
        display: flex;
        filter: drop-shadow(0.45rem 0.45rem 0.2rem var(--shadow-color));
    }

    #left .ornament {
        clip-path: polygon(
                0% 0%,
                100% 0%,
                0% 100%
        );
    }

    .alternative #left {
        justify-content: end;
        align-items: end;
        filter: drop-shadow(0.45rem -0.45rem 0.2rem var(--shadow-color));
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

    .alternative #right {
        justify-content: start;
        align-items: start;
        filter: drop-shadow(-0.45rem 0.45rem 0.2rem var(--shadow-color));
    }

    .ornament {
        height: 30rem;
        width: 30rem;
        background-color: var(--base-color);
    }

    .alternative .ornament {
        transform: scaleY(-1);
    }

    #middle {
        width: 100%;
        min-width: 35em;
        margin: 0 3rem 0 3rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 11rem 0 11rem 0;
    }

    .mobile #middle {
        min-width: unset;
        margin: 0;
    }

    #content {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 7rem;
    }

    .mobile #content {
        margin: 5rem 1.5rem 0 1.5rem;
    }
</style>