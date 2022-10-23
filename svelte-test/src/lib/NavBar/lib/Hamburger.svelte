<script lang="ts">
    export let active = false;
</script>

<div id="hamburger" class="mobile-visible">
    <div id="bars" class:active={active} on:click>
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
    </div>
</div>

<style>
    #hamburger {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 0.6rem;
    }

    #bars {
        height: 2rem;
        width: 4rem;
        cursor: pointer;
        clip-path: polygon(
                0% 0%,
                100% 0%,
                50% 100%
        );
        transition: all 300ms;
    }

    .bar {
        width: 100%;
        height: 0.3rem;
        margin-bottom: 0.3rem;
        background-color: var(--text-color);
        transition: all 300ms;
    }

    #bars.active {
        width: 2rem;
        clip-path: none;
    }

    #bars.active > .bar:nth-of-type(2) {
        opacity: 0;
    }

    #bars.active > .bar:nth-of-type(1) {
        transform: rotate(45deg) translate(0.35rem, 0.4rem);
    }

    #bars.active > .bar:nth-of-type(3) {
        transform: rotate(-45deg) translate(0.45rem, -0.5rem);
    }
</style>