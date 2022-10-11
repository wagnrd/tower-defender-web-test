<script lang="ts">
    const percentageScrolledFadeThreshold = 0.1;
    const fadeMultiplier = 1.5;
    let y = 0;

    const updateSplash = (newY: number) => {
        console.log(newY);
        const elem = document.getElementById("splash");

        if (!elem)
            return;

        const percentageScrolled = 1 / window.innerHeight.valueOf() * newY;

        if (percentageScrolled > percentageScrolledFadeThreshold)
            elem.style.opacity = (1 - ((percentageScrolled - percentageScrolledFadeThreshold) * fadeMultiplier)).toString(10);
    }
    $: updateSplash(y);
</script>

<svelte:window bind:scrollY={y}/>
<div id="splash">
</div>

<style>
    #splash {
        width: 100vw;
        height: 100vh;
        z-index: 101;
        background: url("./src/assets/splash-background.jpg") top center/cover no-repeat;
    }
</style>