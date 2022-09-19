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
        height: 3.8rem;
        top: 0;
        z-index: 100;
        position: fixed;
        display: flex;
        filter: drop-shadow(0.45rem 0.45rem 0.2rem var(--shadow-color));
    }

    .content {
        background-color: var(--base-color);
        display: flex;
        padding-right: 1.68rem;
        margin-right: -1px;
    }

    .brand {
        width: 19rem;
        display: flex;
        align-items: center;
    }

    .logo {
        height: 4.9rem;
        margin-left: 0.55rem;
    }

    .name {
        margin: 0.4rem 0 0 -1.3rem;
        font-family: var(--brand-font-family);
        font-weight: bold;
        font-size: 1.41rem;
    }

    .bar-ornament {
        width: 3.8rem;
        background-color: var(--base-color);
        clip-path: polygon(
                0% 0%,
                100% 100%,
                0% 100%
        );
    }

    .contrast-ornament {
        width: 7.4rem;
        margin-left: -2.75rem;
        background-color: var(--contrast-color);
        clip-path: polygon(
                0% 0%,
                100% 0%,
                50% 100%
        );
    }
</style>