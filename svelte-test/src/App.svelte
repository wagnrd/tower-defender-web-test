<script lang="ts">
    import background from "./assets/background.jpg";
    import NavBar from "./components/NavBar.svelte";
    import NavBarButton from "./components/NavBarButton.svelte";
</script>

<main>
    <img src={background} id="background-image"/>

    <NavBar>
        <NavBarButton disabled>NEWS</NavBarButton>
        <NavBarButton disabled>GAME</NavBarButton>
        <NavBarButton disable>DOWNLOAD</NavBarButton>
    </NavBar>

    <div class="small-logo"></div>
</main>

<style>
    #background-image {
        width: 100%;
        position: absolute;
        top: -51rem;
    }
</style>