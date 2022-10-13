<script lang="ts">
    import bigGun1Image from "../../../assets/big-gun-1.png";
    import spaceFighterImage from "../../../assets/space-fighter.png";
    import logoImage from "../../../assets/logo-dark.svg";
    import {navBarHidden} from "../../../components/NavBar/components/nav-bar-store";

    navBarHidden.update(() => true);

    const percentageScrolledFadeThreshold = 0.1;
    const fadeMultiplier = 1.5;
    let y = 0;

    const updateSplash = (newY: number) => {
        const elem = document.getElementById("splash");

        if (!elem)
            return;

        const percentageScrolled = 1 / window.innerHeight.valueOf() * newY;
        const scrollValue = percentageScrolled - percentageScrolledFadeThreshold;
        const opacity = 1 - (scrollValue * fadeMultiplier);
        const blur = scrollValue * 20;
        elem.style.opacity = opacity.toString(10);
        elem.style.filter = `blur(${blur}px)`;

        if (percentageScrolled >= percentageScrolledFadeThreshold)
            navBarHidden.update(() => false);
        else
            navBarHidden.update(() => true);
    }
    $: updateSplash(y);
</script>

<svelte:window bind:scrollY={y}/>
<div id="splash">
    <div id="big-gun-container">
        <img src={bigGun1Image} id="big-gun" alt="Big gun"/>
    </div>
    <div id="space-fighter-container">
        <img src={spaceFighterImage} id="space-fighter" alt="Space fighter"/>
    </div>
    <div id="logo-container">
        <img src={logoImage} id="logo" alt="Space fighter"/>
    </div>
    <div id="sub-title-container">
        <div id="sub-title">YET ANOTHER TOWER DEFENDER</div>
    </div>
</div>

<style>
    #splash {
        width: calc(100vm - (100vm - 100%));
        height: calc(100vh + 5rem);
        background: url("./src/assets/splash-background.jpg") top center/cover no-repeat;
        position: relative;
        z-index: 101;
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
        animation-name: space-fighter-appear;
        animation-duration: 1000ms;
        animation-delay: 800ms;
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

    #logo-container {
        width: 100%;
        height: 100vh;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #logo {
        width: 48rem;
        object-fit: contain;
        margin-bottom: 6rem;
        animation-name: logo-appear;
        animation-duration: 3000ms;
        animation-delay: 2300ms;
        animation-fill-mode: both;
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
        font: var(--headline-font-size) var(--headline-font-family);
        margin-bottom: 5rem;
        animation-name: sub-title-appear;
        animation-duration: 3000ms;
        animation-delay: 2300ms;
        animation-fill-mode: both;
    }

    @keyframes sub-title-appear {
        from {
            opacity: 0;
        }
    }
</style>