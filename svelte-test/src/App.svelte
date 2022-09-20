<script lang="ts">
    import {Route, Router} from "svelte-routing";
    import background from "./assets/background.jpg";
    import NavBar from "./components/NavBar.svelte";
    import NavBarButton from "./components/NavBarButton.svelte";
    import NotFound from "./pages/NotFound.svelte";

    const homeRoute = "/";
    const newsRoute = "news";
    const gameRoute = "game";
    const downloadRoute = "download";
</script>
<main>
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
    main {
        background: var(--base-color) url("./assets/background.jpg") no-repeat scroll center -84rem;
    }
</style>