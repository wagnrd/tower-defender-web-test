<script lang="ts">
    import Section from "../../components/Section.svelte";
    import bigGun2Image from "../../assets/big-gun-2.png";
</script>

<Section heading="KEY FEATURES">
    <img src={bigGun2Image}/>
</Section>

<style>
    img {
        width: 35rem;
        object-fit: contain;
        position: absolute;
        left: 2rem;
        margin-top: 3rem;
    }
</style>