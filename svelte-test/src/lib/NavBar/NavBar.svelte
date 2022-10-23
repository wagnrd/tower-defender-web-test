<script lang="ts">
    import {navigate} from "svelte-routing";
    import logoDarkSmall from "../../assets/images/logo-dark-small.svg";
    import {isNavBarHiddenState} from "./lib/nav-bar-store";
    import Hamburger from "./lib/Hamburger.svelte";

    export let homeRoute = "";

    let isHamburgerMenuHidden = true;
    let isNavBarHidden = false;
    isNavBarHiddenState.set(isNavBarHidden);
    isNavBarHiddenState.subscribe((shouldHide: boolean) => isNavBarHidden = shouldHide);

    const toggleMobileMenu = () => isHamburgerMenuHidden = !isHamburgerMenuHidden;
</script>

<div id="nav-bar" class:hidden="{isNavBarHidden}">
    <div id="brand" on:click={() => navigate(homeRoute)}>
        <img src={logoDarkSmall} id="logo" alt="Brand logo"/>
        <div id="name">
            Y.A.T.D.
        </div>
    </div>
    <div id="mobile-spacer" class="mobile-visible"></div>
    <div id="buttons" class="mobile-hidden">
        <slot></slot>
    </div>
    <div id="bar-ornament"></div>
    <div id="contrast-ornament">
        <Hamburger active={!isHamburgerMenuHidden} on:click={toggleMobileMenu}/>
    </div>
    <div id="hamburger-menu" class="mobile-visible" class:hidden={isHamburgerMenuHidden}>
        <slot></slot>
    </div>
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
        cursor: pointer;
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

    #hamburger-menu {
        height: 100vh;
        width: 16rem;
        position: absolute;
        right: 0;
        padding-top: 5rem;
        z-index: -1;
        display: flex;
        flex-direction: column;
        transition: right 300ms;
    }

    #hamburger-menu.hidden {
        right: -16rem;
    }
</style>