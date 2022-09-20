<script lang="ts">
    import {Route, Router} from "svelte-routing";

    import background from "./assets/background.jpg"
    import NavBar from "./components/NavBar.svelte";
    import NavBarButton from "./components/NavBarButton.svelte";
    import NotFound from "./pages/NotFound.svelte";

    const homeRoute = "/";
    const newsRoute = "news";
    const gameRoute = "game";
    const downloadRoute = "download";
</script>

<main>
    <div class="background-fallback"></div>
    <img src={background} class="background-image"/>

    <NavBar>
        <NavBarButton route={newsRoute}>NEWS</NavBarButton>
        <NavBarButton route={gameRoute}>GAME</NavBarButton>
        <NavBarButton route={downloadRoute}>DOWNLOAD</NavBarButton>
    </NavBar>

    <Router>
        <Route path={homeRoute}>
            {#await import("./pages/Home.svelte") then value}
                <svelte:component this={value.default}/>
            {/await}
        </Route>
        <Route path={newsRoute}>
            {#await import("./pages/News.svelte") then value}
                <svelte:component this={value.default}/>
            {/await}
        </Route>
        <Route path={gameRoute}>
            {#await import("./pages/Game.svelte") then value}
                <svelte:component this={value.default}/>
            {/await}
        </Route>
        <Route path={downloadRoute}>
            {#await import("./pages/Download.svelte") then value}
                <svelte:component this={value.default}/>
            {/await}
        </Route>
        <Route path="*">
            <NotFound/>
        </Route>
    </Router>
</main>

<style>
    .background-fallback {
        position: fixed;
        height: 100vh;
        width: 100%;
        background-color: var(--base-color);
        z-index: -1;
    }

    .background-image {
        width: 100%;
        position: absolute;
        top: -78rem;
        z-index: -1;
    }
</style>