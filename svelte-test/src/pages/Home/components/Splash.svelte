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
    <div id="splash-image">
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
    <div id="bottom-gradient"></div>
</div>

<style>
    #splash-image {
        width: calc(100vm - (100vm - 100%));
        height: 100vh;
        background: url("./src/assets/splash-background.jpg") top center/cover no-repeat;
        position: relative;
        z-index: 101;
        overflow: hidden;
    }

    #big-gun-container {
        height: 100%;
        position: absolute;
        display: flex;
        justify-content: start;
        align-items: end;
    }

    #big-gun {
        width: 33.2rem;
        object-fit: contain;
        margin: 0 0 0.2rem -2.7rem;
    }

    #space-fighter-container {
        width: 100%;
        height: 100%;
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

    #logo-container {
        width: 100%;
        height: 100%;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #logo {
        width: 48rem;
        object-fit: contain;
        margin-bottom: 6rem;
    }

    #sub-title-container {
        height: 100%;
        width: 100%;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: end;
    }

    #sub-title {
        font: var(--headline-font-size) var(--headline-font-family);
        margin-bottom: 5rem
    }

    #bottom-gradient {
        position: relative;
        height: 6rem;
        width: 100%;
        z-index: 102;
        margin-top: -2.5rem;
        background-image: linear-gradient(to bottom, transparent, #8f4c3c 25%, #8f4c3c 50%, transparent);
    }
</style>