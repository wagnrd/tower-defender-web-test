<script lang="ts">
    import {navigate} from "svelte-routing";
    import logoDarkSmall from "../../assets/images/logo-dark-small.svg";
    import {navBarHidden} from "./components/nav-bar-store";

    export let homeRoute = "";

    let isNavBarHidden = false;
    navBarHidden.set(isNavBarHidden);
    navBarHidden.subscribe((shouldHide: boolean) => isNavBarHidden = shouldHide);
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
        <div id="hamburger" class="mobile-visible">
            <div class="hamburger-bar">
                <div class="triangle left"></div>
                <div class="bar nr1"></div>
                <div class="triangle right"></div>
            </div>
            <div class="hamburger-bar">
                <div class="triangle left"></div>
                <div class="bar nr2"></div>
                <div class="triangle right"></div>
            </div>
            <div class="hamburger-bar">
                <div class="triangle left"></div>
                <div class="bar nr3"></div>
                <div class="triangle right"></div>
            </div>
        </div>
    </div>
</div>

<style>
    #nav-bar {
        width: 100%;
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

    #hamburger {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 0.3rem;
    }

    .hamburger-bar {
        display: flex;
        margin-top: 0.3rem;
    }

    .triangle {
        background-color: var(--text-color);
        width: 0.3rem;
        height: 0.3rem;
    }

    .triangle.left {
        clip-path: polygon(
                0% 0%,
                100% 0%,
                100% 100%
        );
    }

    .bar {
        background-color: var(--text-color);
        height: 0.3rem;
        margin: 0 -1px 0 -1px;
    }

    .bar.nr1 {
        width: 3.7rem;
    }

    .bar.nr2 {
        width: 2.5rem;
    }

    .bar.nr3 {
        width: 1.2rem;
    }

    .triangle.right {
        clip-path: polygon(
                0% 0%,
                100% 0%,
                0% 100%
        );
    }
</style>