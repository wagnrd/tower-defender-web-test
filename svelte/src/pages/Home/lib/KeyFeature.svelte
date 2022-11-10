<script lang="ts">
    import BulletPoint from "../../../lib/BulletPoint.svelte";

    export let title: string;
</script>

<div>
    <BulletPoint headline>{title}</BulletPoint>
    <p id="body">
        <slot/>
    </p>
</div>

<style>
    #body {
        margin-top: 1.5rem;
    }
</style>