<script lang="ts">
    import {Route, Router} from "svelte-routing";

    import background from "./assets/background.jpg";

    import NavBar from "./components/NavBar.svelte";
    import NavBarButton from "./components/NavBarButton.svelte";
    import Home from "./pages/Home.svelte";
    import News from "./pages/News.svelte";
    import Game from "./pages/Game.svelte";
    import Download from "./pages/Download.svelte";
    import NotFound from "./pages/NotFound.svelte";

    const homeRoute = "/";
    const newsRoute = "news";
    const gameRoute = "game";
    const downloadRoute = "download";

</script>

<main>
    <img src={background} class="background-image"/>

    <NavBar>
        <NavBarButton route={newsRoute}>NEWS</NavBarButton>
        <NavBarButton route={gameRoute}>GAME</NavBarButton>
        <NavBarButton route={downloadRoute}>DOWNLOAD</NavBarButton>
    </NavBar>

    <Router>
        <Route path={homeRoute}>
            <Home/>
        </Route>
        <Route path={newsRoute}>
            <News/>
        </Route>
        <Route path={gameRoute}>
            <Game/>
        </Route>
        <Route path={downloadRoute}>
            <Download/>
        </Route>
        <Route path="*">
            <NotFound/>
        </Route>
    </Router>
</main>

<style>
    .background-image {
        width: 100%;
        position: absolute;
        top: -78rem;
        z-index: -1;
    }
</style>