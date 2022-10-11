<script lang="ts">
    export let right = false;
    export let title = "";
</script>

<div class="section" class:right={right} class:left={!right}>
    <div class="background">
        <div class="ornament"></div>
    </div>
    <div>
        <h1>{title}</h1>
        <div class="content">
            <slot></slot>
        </div>
    </div>
</div>

<style>
    .section {
        width: 100%;
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
        width: 73%;
        height: 33rem;
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
        align-items: start;
    }

    .right .content {
        justify-content: end;
    }
</style>