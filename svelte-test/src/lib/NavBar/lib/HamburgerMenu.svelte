<script lang="ts">
    export let hidden = false;

    let isActive = false;
    const toggleMobileMenu = () => isActive = !isActive;
</script>

<div id="hamburger">
    <div id="bars" class:active={isActive} on:click={toggleMobileMenu}>
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
    </div>
</div>
<div id="menu" class:inactive={!isActive | hidden}>
    <slot/>
</div>

<style>
    #hamburger {
        min-width: 7.4rem;
        padding-top: 0.6rem;
        margin-left: -2.75rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: var(--contrast-color);
        clip-path: polygon(
                0% 0%,
                100% 0%,
                50% 100%
        );
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

    #menu {
        height: 100vh;
        width: 16rem;
        background-color: var(--base-color);
        position: absolute;
        right: 0;
        padding-top: 5rem;
        display: flex;
        flex-direction: column;
        z-index: -1;
        filter: drop-shadow(-0.45rem 0.45rem 0.2rem var(--shadow-color));
        transition: right 300ms;
    }

    #menu.inactive {
        right: -16rem;
        filter: none;
    }
</style>