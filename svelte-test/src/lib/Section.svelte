<script lang="ts">
    import {isMobileState} from "./screen-store";

    export let right = false;
    export let title = "";

    let isMobile = false;
    isMobileState.subscribe(value => isMobile = value);
</script>

<div id="section" class:right={right} class:mobile={isMobile}>
    <div id="background">
        <div id="ornament"></div>
    </div>
    <div>
        <h1>{title}</h1>
        <div id="content">
            <slot/>
        </div>
    </div>
</div>

<style>
    #section {
        width: 100%;
        margin-bottom: 11rem;
        display: grid;
        grid-template-areas: "stack";
    }

    #section > * {
        grid-area: stack;
    }

    #background {
        filter: drop-shadow(0.45rem 0.45rem 0.2rem var(--shadow-color));
        z-index: -2;
    }

    .right #background {
        filter: drop-shadow(-0.45rem 0.45rem 0.2rem var(--shadow-color));
    }

    #ornament {
        width: 73%;
        height: 33rem;
        background-color: var(--base-color);
        clip-path: polygon(
                0% 0%,
                100% 0%,
                0% 100%
        );
    }

    .right #ornament {
        margin-left: 27%;
        clip-path: polygon(
                100% 0%,
                0% 0%,
                100% 100%
        );
    }

    .mobile #ornament {
        width: 100vw;
        height: 100%;
        margin: 0;
    }

    .mobile h1 {
        margin-left: -5vw;
        margin-right: 0;
    }

    .mobile.right h1 {
        margin-left: 0;
        margin-right: -5vw;
    }

    #content {
        display: flex;
        align-items: start;
    }

    .right #content {
        justify-content: end;
    }

    .mobile #content {
        justify-content: center;
    }
</style>