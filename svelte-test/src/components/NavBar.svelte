<script lang="ts">

</script>

<div class="nav-bar-shadow">
    <div class="nav-bar">

    </div>
</div>

<style>
    .nav-bar {
        width: 70vw;
        height: 6vw;
        top: 0;
        position: fixed;
        background-color: var(--base-color);
        clip-path: polygon(
                0% 0%,
                90% 0%,
                100% 100%,
                0% 100%
        );
        z-index: 100;
    }

    .nav-bar-shadow {
        filter: drop-shadow(10px 10px 5px rgba(0, 0, 0, 0.5));
    }
</style>