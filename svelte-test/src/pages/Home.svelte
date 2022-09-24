<script lang="ts">
    import Section from "../components/Section.svelte";
    import armouredTruckImage from "../assets/armoured-truck.png";
    import bigGun2Image from "../assets/big-gun-2.png";
</script>

<div class="page">
    <Section heading="LATEST NEWS" image={armouredTruckImage} right>
    </Section>

    <Section heading="KEY FEATURES" image={bigGun2Image}>
    </Section>
</div>

<style>
    .page {
        margin-top: 10.4rem;
    }
</style>