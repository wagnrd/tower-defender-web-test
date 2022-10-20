<div id="hamburger">
    <div class="hamburger-bar">
        <div class="triangle left"></div>
        <div class="bar nr1"></div>
        <div class="triangle right"></div>
    </div>
    <div class="hamburger-bar">
        <div class="triangle left"></div>
        <div class="bar nr2"></div>
        <div class="triangle right"></div>
    </div>
    <div class="hamburger-bar">
        <div class="triangle left"></div>
        <div class="bar nr3"></div>
        <div class="triangle right"></div>
    </div>
</div>

<style>
    #hamburger {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 0.3rem;
    }

    .hamburger-bar {
        display: flex;
        margin-top: 0.3rem;
    }

    .triangle {
        background-color: var(--text-color);
        width: 0.3rem;
        height: 0.3rem;
    }

    .triangle.left {
        clip-path: polygon(
                0% 0%,
                100% 0%,
                100% 100%
        );
    }

    .bar {
        background-color: var(--text-color);
        height: 0.3rem;
        margin: 0 -1px 0 -1px;
    }

    .bar.nr1 {
        width: 3.7rem;
    }

    .bar.nr2 {
        width: 2.5rem;
    }

    .bar.nr3 {
        width: 1.2rem;
    }

    .triangle.right {
        clip-path: polygon(
                0% 0%,
                100% 0%,
                0% 100%
        );
    }
</style>