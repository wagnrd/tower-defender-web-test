<script lang="ts">
    export let right = false;
    export let heading = "";

    const alignment = right ? "right" : "left";
</script>

<div class="section {alignment}">
    <div class="background">
        <div class="ornament"></div>
    </div>
    <div>
        <h1>{heading}</h1>
        <div class="content">
            <slot></slot>
        </div>
    </div>
</div>

<style>
    .section {
        margin-bottom: 11rem;
        display: grid;
        grid-template-areas: "stack";
    }

    .section > * {
        grid-area: stack;
    }

    .background {
        filter: drop-shadow(0.45rem 0.45rem 0.2rem var(--shadow-color));
        z-index: -2;
    }

    .right .background {
        display: flex;
        justify-content: end;
        z-index: -2;
    }

    .ornament {
        width: 70rem;
        height: 30.7rem;
        background-color: var(--base-color);
    }

    .left .ornament {
        clip-path: polygon(
                0% 0%,
                100% 0%,
                0% 100%
        );
    }

    .right .ornament {
        clip-path: polygon(
                100% 0%,
                0% 0%,
                100% 100%
        );
    }

    .content {
        display: flex;
    }

    .right .content {
        justify-content: end;
    }
</style>