<script lang="ts">
    const year = new Date().getUTCFullYear();
</script>

<div id="footer">
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
        height: 12rem;
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

    #brand {
        font: var(--subheadline-font);
        margin: 1.5rem 0 1.5rem 0;
        text-align: center;
    }

    #copyright {
        text-align: center;
    }
</style>