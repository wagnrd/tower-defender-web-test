<script lang="ts">
    import {isMobileState} from "../screen-store";

    const year = new Date().getUTCFullYear();
    let isMobile = false;
    isMobileState.subscribe(value => isMobile = value);
</script>

<div id="footer" class:mobile={isMobile}>
    <div id="background">
        <div id="buttons">
            <slot></slot>
        </div>
        <div id="brand">wagnrd Software</div>
        <h3 id="copyright">
            © {year}, wagnrd Software. All rights reserved.<br/>
            All trademarks are the property of their respective owners.
        </h3>
    </div>
</div>

<style>
    #footer {
        width: 100%;
        padding: 1.5rem 0 1.5rem 0;
        background-color: var(--base-color);
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        filter: drop-shadow(0.45rem -0.45rem 0.2rem var(--shadow-color));
    }

    #buttons {
        display: flex;
        justify-content: center;
    }

    .mobile #buttons {
        flex-wrap: wrap;
        row-gap: 1rem;
    }

    #brand {
        font: var(--subheadline-font);
        margin: 1.5rem 0 1.5rem 0;
        text-align: center;
    }

    #copyright {
        text-align: center;
        padding: 0 1.5rem 0 1.5rem;
    }
</style>