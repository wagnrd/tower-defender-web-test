<script lang="ts">
    import bigGun1Image from "../../../assets/big-gun-1.png";
    import spaceFighterImage from "../../../assets/space-fighter.png";
    import logoImage from "../../../assets/logo-dark.svg";

    const percentageScrolledFadeThreshold = 0.1;
    const fadeMultiplier = 1.5;
    let y = 0;

    const updateSplash = (newY: number) => {
        console.log(newY);
        const elem = document.getElementById("splash");

        if (!elem)
            return;

        const percentageScrolled = 1 / window.innerHeight.valueOf() * newY;
        const scrollValue = percentageScrolled - percentageScrolledFadeThreshold;
        const opacity = 1 - (scrollValue * fadeMultiplier);
        const blur = scrollValue * 20;
        console.log(newY, blur, opacity);

        elem.style.opacity = opacity.toString(10);
        elem.style.filter = `blur(${blur}px)`;
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
        height: 100vh;
        z-index: 101;
        background: url("./src/assets/splash-background.jpg") top center/cover no-repeat;
        overflow: clip;
        /*
        -webkit-mask-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 1)), to(rgba(0, 0, 0, 0.5)));
        mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
         */
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
        margin-top: -6rem;
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
</style>