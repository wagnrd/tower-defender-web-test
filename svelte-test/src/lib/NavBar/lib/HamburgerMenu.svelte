<script lang="ts">
    import { swipe } from "svelte-gestures";

    export let hidden = false;
    export let onClick: () => void;


    let isRequestedToShow = false;
    $: isActive = !hidden && isRequestedToShow;
    const toggleMobileMenu = () => {
        isRequestedToShow = !isActive;
        onClick();
    };

    const onOverlaySwipe = (event: any) => {
        if (event.detail.direction === "right") {
            isRequestedToShow = false;
        }
    };

    const onOverlayClick = ({ target: { id: targetId } }: PointerEvent) => {
        if (targetId === "overlay") {
            isRequestedToShow = false;
        }
    };

    const onMenuItemClick = ({ target: { id: targetId } }: PointerEvent) => {
        if (targetId != "menu") {
            isRequestedToShow = false;
        }
    };
</script>

<div id="hamburger" class="clickable" on:click={toggleMobileMenu}>
    <div id="bars" class:active={isActive}>
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
    </div>
</div>
<div id="overlay" class="clickable" class:active={isActive}
     on:click={onOverlayClick} use:swipe on:swipe={onOverlaySwipe}>
    <div id="menu" class:inactive={!isActive} on:click={onMenuItemClick}>
        <slot/>
    </div>
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

    #overlay {
        height: 100vh;
        width: 100vw;
        position: absolute;
        background-color: transparent;
        z-index: -1;
        pointer-events: none;
        transition: all 300ms;
        color: inherit;
    }

    #overlay.active {
        background-color: rgba(0, 0, 0, 0.5);
        pointer-events: all;
    }
</style>