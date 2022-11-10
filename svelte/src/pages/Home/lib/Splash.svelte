<script lang="ts">
    import { onDestroy } from "svelte";
    import bigGun1Image from "../../../assets/images/big-gun-1.png";
    import spaceFighterImage from "../../../assets/images/space-fighter.png";
    import logoImage from "../../../assets/images/logo-dark.svg";
    import { isNavBarRequestedToHide } from "../../../lib/NavBar/nav-bar-store";
    import { isMobile } from "../../../lib/screen-store";

    const percentageScrolledFadeThreshold = 0.2;
    const percentageScrolledSpaceShipAnimationThreshold = 0.1;
    const fadeMultiplier = 1.3;
    let y = 0;
    let isSpaceFighterVisible = true;

    function updateSplash(newY: number) {
        const elem = document.getElementById("splash");

        if (!elem) {
            return;
        }

        const percentageScrolled = 1 / window.innerHeight.valueOf() * newY;
        const scrollValue = percentageScrolled - percentageScrolledFadeThreshold;

        if (!$isMobile) {
            const opacity = 1 - (scrollValue * fadeMultiplier);
            const blur = Math.max(scrollValue * 20, 0);
            elem.style.opacity = opacity.toString(10);
            elem.style.filter = `blur(${blur}px)`;
        }

        isNavBarRequestedToHide.update(() => percentageScrolled <= percentageScrolledFadeThreshold);
        isSpaceFighterVisible = percentageScrolled <= percentageScrolledSpaceShipAnimationThreshold;
    }

    $: updateSplash(y);

    isNavBarRequestedToHide.update(() => true);
    onDestroy(() => isNavBarRequestedToHide.update(() => false));
</script>

<svelte:window bind:scrollY={y}/>
<div id="splash" class:mobile={$isMobile}>
    {#if !$isMobile}
        <div id="big-gun-container">
            <img src={bigGun1Image} id="big-gun" alt="Big gun"/>
        </div>
        <div id="space-fighter-container">
            <img src={spaceFighterImage} id="space-fighter" class:visible={isSpaceFighterVisible}
                 class:hidden={!isSpaceFighterVisible} alt="Space fighter"/>
        </div>
    {/if}

    <div id="logo-container">
        <img src={logoImage} id="logo" alt="Space fighter"/>
    </div>
    <div id="sub-title-container">
        <div id="sub-title">YET ANOTHER TOWER DEFENDER</div>
    </div>
</div>

<style>
    #splash {
        width: calc(100vw - (100vw - 100%));
        height: calc(100vh + 5rem);
        background: url("../../../assets/images/splash-background.jpg") top center/cover no-repeat;
        position: relative;
        overflow: hidden;
        -webkit-mask-image: -webkit-gradient(linear, left top, left bottom, color-stop(90%, black), to(transparent));
        mask-image: linear-gradient(to bottom, black, black 90%, transparent);
    }

    #big-gun-container {
        height: 100vh;
        position: absolute;
        display: flex;
        justify-content: start;
        align-items: end;
    }

    #big-gun {
        width: 33.2rem;
        object-fit: contain;
        margin: 0 0 -1rem -2.7rem;
        -webkit-mask-image: -webkit-gradient(linear, left top, left bottom, color-stop(93%, black), color-stop(98%, transparent), to(transparent));
        mask-image: linear-gradient(to bottom, black, black 93%, transparent 98%, transparent);
        animation-name: big-gun-appear;
        animation-duration: 700ms;
        animation-delay: 1500ms;
        animation-timing-function: ease-in;
        animation-fill-mode: both;
    }

    @keyframes big-gun-appear {
        0% {
            margin-bottom: 100vh;
        }
        90% {
            margin-bottom: -1rem;
        }
        95% {
            margin-bottom: -0.5rem;
        }
    }

    #space-fighter-container {
        width: 100%;
        position: absolute;
        display: flex;
        justify-content: end;
        align-items: start;
    }

    #space-fighter {
        width: 40rem;
        object-fit: contain;
        margin: 3.5rem -3.1rem 0 0;
    }

    #space-fighter.visible {
        animation-name: space-fighter-appear;
        animation-duration: 1000ms;
        animation-delay: 800ms;
        animation-fill-mode: both;
    }

    #space-fighter.hidden {
        animation-name: space-fighter-disappear;
        animation-duration: 1000ms;
        animation-timing-function: ease-in;
        animation-fill-mode: both;
    }

    @keyframes space-fighter-appear {
        from {
            margin-right: -20rem;
            margin-top: 10rem;
            width: 20rem;
            transform: rotate(10deg);
        }
    }

    @keyframes space-fighter-disappear {
        to {
            margin-right: 100vw;
            margin-top: 30rem;
            width: 60rem;
            transform: rotate(-20deg);
        }
    }

    #logo-container {
        width: 100%;
        height: 100vh;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #logo {
        max-width: 48rem;
        object-fit: contain;
        margin-bottom: 6rem;
        animation-name: logo-appear;
        animation-duration: 3000ms;
        animation-delay: 2100ms;
        animation-fill-mode: both;
    }

    .mobile #logo {
        width: 100%;
        animation-delay: 800ms;
    }

    @keyframes logo-appear {
        from {
            opacity: 0;
        }
    }

    #sub-title-container {
        height: 100vh;
        width: 100%;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: end;
    }

    #sub-title {
        width: 80%;
        font: 2.2rem var(--sub-brand-font-family);
        text-align: center;
        margin-bottom: 6rem;
        animation-name: sub-title-appear;
        animation-duration: 3000ms;
        animation-delay: 2100ms;
        animation-fill-mode: both;
    }

    .mobile #sub-title {
        font-size: clamp(1.5rem, 5vw, 2.2rem);
        animation-delay: 800ms;
    }

    @keyframes sub-title-appear {
        from {
            opacity: 0;
        }
    }
</style>