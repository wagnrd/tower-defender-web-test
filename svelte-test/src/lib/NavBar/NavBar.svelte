<script lang="ts">
    import { navigate } from "svelte-routing";
    import logoDarkSmall from "../../assets/images/logo-dark-small.svg";
    import Hamburger from "./lib/HamburgerMenu.svelte";
    import { isNavBarHiddenState } from "./nav-bar-store";
    import { isMobileState } from "../screen-store";

    export let homeRoute = "";

    let isAllowedToHide = true;
    let isRequestedToHide = false;
    let isHamburgerMenuRequestedToHide = false;
    $: isNavBarHidden = isAllowedToHide && isRequestedToHide;
    $: isHamburgerMenuHidden = isNavBarHidden || isHamburgerMenuRequestedToHide;
    isNavBarHiddenState.subscribe((shouldHide: boolean) => isRequestedToHide = shouldHide);

    let isMobile = false;
    isMobileState.subscribe(value => isMobile = value);

    const forbidToHide = () => isAllowedToHide = false;
    const allowToHide = () => isAllowedToHide = true;
    const onHamburgerClick = () => isHamburgerMenuRequestedToHide = false;

    const onHomeButtonClick = () => {
        navigate(homeRoute);
        isHamburgerMenuRequestedToHide = true;
    };
</script>

<div id="nav-bar" class:hidden="{isNavBarHidden}" on:mouseenter={forbidToHide} on:mouseleave={allowToHide}>
    <div id="brand" class="clickable" on:click={onHomeButtonClick}>
        <img src={logoDarkSmall} id="logo" alt="Brand logo"/>
        <div id="name">
            Y.A.T.D.
        </div>
    </div>

    {#if isMobile}
        <div id="mobile-spacer"></div>
        <!--suppress XmlDuplicatedId -->
        <div id="bar-ornament"></div>
        <Hamburger forbidToShow={isHamburgerMenuHidden} onClick={onHamburgerClick}>
            <slot/>
        </Hamburger>
    {:else}
        <div id="buttons">
            <slot/>
        </div>
        <!--suppress XmlDuplicatedId -->
        <div id="bar-ornament"></div>
        <div id="contrast-ornament"></div>
    {/if}
</div>

<style>
    #nav-bar {
        width: calc(100vw - (100vw - 100%));
        height: 3.8rem;
        top: 0;
        z-index: 100;
        position: fixed;
        display: flex;
        filter: drop-shadow(0.45rem 0.45rem 0.2rem var(--shadow-color));
        transition: all 300ms;
    }

    #nav-bar.hidden {
        top: -3.8rem;
        filter: none;
    }

    #nav-bar > * {
        background-color: var(--base-color);
    }

    #brand {
        min-width: 11rem;
        padding-left: 2rem;
        display: flex;
        align-items: center;
        overflow: clip;
    }

    #logo {
        height: 4.9rem;
        margin-left: -1.5rem;
    }

    #name {
        margin: 0.4rem 0 0 -1.3rem;
        font-family: var(--brand-font-family);
        font-weight: bold;
        font-size: 1.41rem;
    }

    #mobile-spacer {
        width: 100%;
    }

    #buttons {
        display: flex;
        padding: 0 1.68rem 0 6.5rem;
    }

    #bar-ornament {
        min-width: 3.8rem;
        margin-left: -1px;
        clip-path: polygon(
                0% 0%,
                100% 100%,
                0% 100%
        );
    }

    #contrast-ornament {
        min-width: 7.4rem;
        margin-left: -2.75rem;
        background-color: var(--contrast-color);
        clip-path: polygon(
                0% 0%,
                100% 0%,
                50% 100%
        );
    }
</style>