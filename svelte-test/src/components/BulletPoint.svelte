<script lang="ts">
    export let headline = false;
</script>

<div id="bullet-point">
    <div id="triangle" class:headline={headline}></div>
    <div id="text" class:headline={headline}>
        <slot></slot>
    </div>
</div>

<style>
    #bullet-point {
        display: flex;
    }

    #triangle {
        width: var(--body-font-size);
        height: var(--body-font-size);
        background-color: var(--contrast-color);
        clip-path: polygon(
                0% 0%,
                100% 0%,
                100% 100%
        );
    }

    #triangle.headline {
        width: var(--subheadline-font-size);
        height: var(--subheadline-font-size);
    }

    #text {
        font: var(--body-font);
        margin: -0.1rem 0 0 0.5rem;
    }

    #text.headline {
        font: var(--subheadline-font);
        margin: -0.15rem 0 0 0.7rem;
    }
</style>