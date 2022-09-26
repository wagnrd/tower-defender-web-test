<script lang="ts">
    import Section from "../../components/Section.svelte";
    import armouredTruckImage from "../../assets/armoured-truck.png";
</script>

<Section heading="LATEST NEWS" right>
    <img src={armouredTruckImage}/>
</Section>

<style>
    img {
        width: 33rem;
        object-fit: contain;
        position: absolute;
        right: 2rem;
        margin-top: -1.8rem;
    }
</style>