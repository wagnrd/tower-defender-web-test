<script lang="ts">
    import {Route, Router} from "svelte-routing";
    import NavBar from "./components/NavBar.svelte";
    import NavBarButton from "./components/NavBarButton.svelte";
    import NotFound from "./pages/NotFound.svelte";
    import Home from "./pages/Home/Home.svelte";
    import News from "./pages/News.svelte";
    import Game from "./pages/Game.svelte";
    import Download from "./pages/Download.svelte";

    const homeRoute = "/";
    const newsRoute = "/news";
    const gameRoute = "/game";
    const downloadRoute = "/download";
    const forumsRoute = window.location.host + "/forums/";
</script>
<main>
    <NavBar homeRoute={homeRoute}>
        <NavBarButton route={newsRoute}>NEWS</NavBarButton>
        <NavBarButton route={gameRoute}>GAME</NavBarButton>
        <NavBarButton route={forumsRoute}>FORUMS</NavBarButton>
        <NavBarButton route={downloadRoute}>DOWNLOAD</NavBarButton>
    </NavBar>

    <Router>
        <Route path={homeRoute} component={Home}/>
        <Route path={newsRoute} component={News}/>
        <Route path={gameRoute} component={Game}/>
        <Route path={downloadRoute} component={Download}/>
        <Route path="*" component={NotFound}/>
    </Router>
</main>

<style>
</style>