<script lang="ts">
    import { Route, Router } from "svelte-routing";
    import NavBar from "./lib/NavBar/NavBar.svelte";
    import NavBarButton from "./lib/NavBar/NavBarButton.svelte";
    import NotFound from "./pages/NotFound.svelte";
    import Home from "./pages/Home/Home.svelte";
    import News from "./pages/News.svelte";
    import NewsArticle from "./pages/NewsArticle.svelte";
    import Game from "./pages/Game.svelte";
    import Download from "./pages/Download.svelte";
    import Footer from "./lib/Footer/Footer.svelte";
    import FooterButton from "./lib/Footer/FooterButton.svelte";
    import { isMobile } from "./lib/screen-store";
    import { config } from "./config.js";

    const homeRoute = config.basePath + "/";
    const newsRoute = config.basePath + "/svelte/news";
    const newsArticleRoute = config.basePath + "/news/:id";
    const gameRoute = config.basePath + "/game";
    const downloadRoute = config.basePath + "/download";
    const aboutRoute = "https://wagnrd.de";
    const impressumRoute = config.basePath + "/impressum";
    const privacyPolicyRoute = config.basePath + "/privacy";
    const defaultPixelRatio = 16 / 9;
    let innerWidth = Number.MAX_SAFE_INTEGER;

    function openForumsTab() {
        window.open("https://" + window.location.host + "/forums/");
    }

    function openEmail() {
        window.open("mailto:projects@wagnrd.de?subject=Y.A.T.D.%20support%20ticket");
    }

    function setMobileState(pageSize: number) {
        const pixelRatio = screen.width / screen.height;
        const mobileThreshold = 1 - (0.4 / defaultPixelRatio * pixelRatio);

        if (pageSize <= screen.width * mobileThreshold ||
            window.matchMedia("screen and (max-device-width: 1000px)").matches) {
            isMobile.update(_ => true);
        } else {
            isMobile.update(_ => false);
        }
    }

    $: setMobileState(innerWidth);
</script>

<svelte:window bind:innerWidth={innerWidth}/>
<main class:mobile={$isMobile}>
    <NavBar homeRoute={homeRoute}>
        <NavBarButton route={newsRoute}>NEWS</NavBarButton>
        <NavBarButton route={gameRoute}>GAME</NavBarButton>
        <NavBarButton onClick={openForumsTab}>FORUMS</NavBarButton>
        <NavBarButton route={downloadRoute}>DOWNLOAD</NavBarButton>
    </NavBar>

    <div id="flex-wrapper">
        <Router>
            <Route path={homeRoute} component={Home}/>
            <Route path={newsRoute} component={News}/>
            <Route path={newsArticleRoute} component={NewsArticle}/>
            <Route path={gameRoute} component={Game}/>
            <Route path={downloadRoute} component={Download}/>
            <Route path="*" component={NotFound}/>
        </Router>

        <Footer>
            <FooterButton route={aboutRoute}>ABOUT</FooterButton>
            <FooterButton route={impressumRoute}>IMPRESSUM</FooterButton>
            <FooterButton route={privacyPolicyRoute}>PRIVACY POLICY</FooterButton>
            <FooterButton onClick={openEmail}>SUPPORT</FooterButton>
        </Footer>
    </div>
</main>

<style>
    .mobile {
        overflow-x: hidden;
    }

    #flex-wrapper {
        display: flex;
        min-height: 100vh;
        flex-direction: column;
        justify-content: space-between;
    }
</style>