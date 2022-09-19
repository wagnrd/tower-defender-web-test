<script lang="ts">
    import logoDarkSmall from "../assets/logo-dark-small.svg";
</script>

<div class="nav-bar">
    <div class="content">
        <div class="brand">
            <img src={logoDarkSmall} class="logo"/>
            <div class="name">
                Y.A.T.D.
            </div>
        </div>
        <slot></slot>
    </div>
    <div class="bar-ornament"></div>
    <div class="contrast-ornament"></div>
</div>

<style>
    .nav-bar {
        top: 0;
        z-index: 100;
        position: fixed;
        display: flex;
        filter: drop-shadow(10px 10px 5px var(--shadow-color));
    }

    .content {
        width: 50rem;
        height: 3.8rem;
        background-color: var(--base-color);
        display: flex;
    }

    .brand {
        width: 19rem;
        display: flex;
        align-items: center;
    }

    .logo {
        height: 5rem;
        margin-left: 0.46rem;
    }

    .name {
        margin: 0.5rem 0 0 -1.4rem;
        font-family: var(--brand-font-family);
        font-weight: bold;
        font-size: 1.43rem;
    }

    .bar-ornament {
        width: 3.8rem;
        height: 3.8rem;
        background-color: var(--base-color);
        clip-path: polygon(
                0% 0%,
                100% 100%,
                0% 100%
        );
    }

    .contrast-ornament {
        width: 7.4rem;
        height: 3.8rem;
        margin-left: -2.72rem;
        background-color: var(--contrast-color);
        clip-path: polygon(
                0% 0%,
                100% 0%,
                50% 100%
        );
    }
</style>