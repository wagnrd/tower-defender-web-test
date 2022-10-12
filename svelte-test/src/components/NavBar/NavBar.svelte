<script lang="ts">
    import {navigate} from "svelte-routing";
    import logoDarkSmall from "../../assets/logo-dark-small.svg";
    import {navBarHidden} from "./components/nav-bar-store";

    export let homeRoute = "/";

    let isNavBarHidden = false;
    navBarHidden.set(isNavBarHidden);
    navBarHidden.subscribe((shouldHide: boolean) => isNavBarHidden = shouldHide);
</script>

<div class="nav-bar" class:hidden="{isNavBarHidden}">
    <div class="content">
        <div class="brand" on:click={() => navigate(homeRoute)}>
            <img src={logoDarkSmall} class="logo" alt="Brand logo"/>
            <div class="name">
                Y.A.T.D.
            </div>
        </div>
        <slot></slot>
    </div>
    <div class="bar-ornament"></div>
    <div class="contrast-ornament"></div>
</div>

<style>
    .nav-bar {
        height: 3.8rem;
        top: 0;
        z-index: 100;
        position: fixed;
        display: flex;
        filter: drop-shadow(0.45rem 0.45rem 0.2rem var(--shadow-color));
        transition: top 300ms;
    }

    .nav-bar.hidden {
        top: -3.8rem;
    }

    .content {
        background-color: var(--base-color);
        display: flex;
        padding-right: 1.68rem;
        margin-right: -1px;
    }

    .brand {
        width: 10.3rem;
        height: 100%;
        margin: auto 6.5rem auto 2rem;
        display: flex;
        align-items: center;
        overflow: clip;
        cursor: pointer;
    }

    .logo {
        height: 4.9rem;
        margin-left: -1.5rem;
    }

    .name {
        margin: 0.4rem 0 0 -1.3rem;
        font-family: var(--brand-font-family);
        font-weight: bold;
        font-size: 1.41rem;
    }

    .bar-ornament {
        width: 3.8rem;
        background-color: var(--base-color);
        clip-path: polygon(
                0% 0%,
                100% 100%,
                0% 100%
        );
    }

    .contrast-ornament {
        width: 7.4rem;
        margin-left: -2.75rem;
        background-color: var(--contrast-color);
        clip-path: polygon(
                0% 0%,
                100% 0%,
                50% 100%
        );
    }
</style>