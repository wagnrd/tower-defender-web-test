<script lang="ts">
    import BulletPoint from "../../../lib/BulletPoint.svelte";

    export let title: string;
</script>

<div>
    <BulletPoint headline>{title}</BulletPoint>
    <div id="body">
        <slot></slot>
    </div>
</div>

<style>
    #body {
        margin-top: 1.5rem;
    }
</style>