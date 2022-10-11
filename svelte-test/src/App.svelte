<script lang="ts">
    import {Link, Route, Router} from "svelte-routing";
    import NavBar from "./components/NavBar.svelte";
    import NavBarButton from "./components/NavBarButton.svelte";
    import NotFound from "./pages/NotFound.svelte";
    import Home from "./pages/Home/Home.svelte";
    import News from "./pages/News.svelte";
    import Game from "./pages/Game.svelte";
    import Download from "./pages/Download.svelte";
    import Footer from "./components/Footer.svelte";
    import FooterButton from "./components/FooterButton.svelte";

    const homeRoute = "/";
    const newsRoute = "/news";
    const gameRoute = "/game";
    const downloadRoute = "/download";
    const aboutRoute = "/about";
    const impressumRoute = "/impressum";
    const privacyPolicyRoute = "/privacy";

    const openForumsTab = () => window.open("https://" + window.location.host + "/forums/");
    const openEmail = () => window.open("mailto:projects@wagnrd.de?subject=Y.A.T.D.%20support%20ticket");
</script>
<main>
    <NavBar homeRoute={homeRoute}>
        <NavBarButton route={newsRoute}>NEWS</NavBarButton>
        <NavBarButton route={gameRoute}>GAME</NavBarButton>
        <NavBarButton onClick={openForumsTab}>FORUMS</NavBarButton>
        <NavBarButton route={downloadRoute}>DOWNLOAD</NavBarButton>
    </NavBar>

    <Router>
        <Route path={homeRoute} component={Home}/>
        <Route path={newsRoute} component={News}/>
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
</main>

<style>
</style>