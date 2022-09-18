<script lang="ts">
    import background from './assets/background.jpg';
    import NavBar from "./components/NavBar.svelte";
</script>

<main>
    <img src={background} id="background-image"/>

    <NavBar/>
</main>

<style>
    #background-image {
        width: 100%;
        position: absolute;
        top: -51rem;
    }
</style>