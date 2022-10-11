<script lang="ts">
    import BulletPoint from "../../../components/BulletPoint.svelte";

    export let title: string;
</script>

<div id="key-feature">
    <BulletPoint headline>{title}</BulletPoint>
    <div id="body">
        <slot></slot>
    </div>
</div>

<style>
    #key-feature {
        margin-bottom: 4rem;
    }

    #body {
        margin-top: 1.5rem;
    }
</style>