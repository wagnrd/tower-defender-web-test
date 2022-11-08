<script lang="ts">
    import armouredTruckImage from "../../assets/images/armoured-truck.png";
    import bigGun2Image from "../../assets/images/big-gun-2.png";
    import Section from "../../lib/Section/Section.svelte";
    import NewsCarousel from "./lib/NewsCarousel.svelte";
    import KeyFeature from "./lib/KeyFeature.svelte";
    import Splash from "./lib/Splash.svelte";
    import { isMobileState } from "../../lib/screen-store";
    import Page from "../../lib/Page.svelte";

    let isMobile = false;
    isMobileState.subscribe(value => isMobile = value);
</script>

<Page>
    <div id="splash">
        <Splash/>
    </div>

    <Section title="LATEST NEWS" ornament>
        <div id="news-carousel" class:mobile={isMobile}>
            <NewsCarousel/>
        </div>
        {#if false && !isMobile}
            <img src={armouredTruckImage} id="latest-news-section-image" alt="big gun"/>
        {/if}
    </Section>

    <Section title="KEY FEATURES" ornament alternative>
        {#if false && !isMobile}
            <img src={bigGun2Image} id="key-features-section-image" alt="big gun"/>
        {/if}
        <div id="key-features" class:mobile={isMobile}>
            <KeyFeature title="CAMPAIGN">
                Play a campaign with dozens of exciting scenarios. The further you progress through the campaign
                the
                harder the challenges will get!<br/>
                Try and find the perfect moves to beat the incoming armies that want to
                destroy your nexus. Set your personal best times and compete against others on a global
                leaderboard.
            </KeyFeature>
            <KeyFeature title="ENDLESS MODE">
                No story, no limitations, just pure tower defense!<br/>
                If you really want to push your boundaries you can set your own scenario and go as long as you
                can
                last.<br/>
                With personal best times and global leaderboards to open the competition!
            </KeyFeature>
            <KeyFeature title="MAZING">
                You can position your turrets where you want! Employ your own building style with turret mazes
                for
                the
                incoming enemies.<br/>
                Only the resources are your limits! Don't let the armies go straight to your nexus. Maze them
                through a
                jungle of walls, turrets and mines to keep them from your base as long as possible!
            </KeyFeature>
            <KeyFeature title="MAP EDITOR & SHARING PLATFORM">
                Tired of the standard campaign maps? Just create your own and share it with others!<br/>
                Or download some awesome custom maps from other players on the game internal sharing platform.
            </KeyFeature>
        </div>
    </Section>
</Page>

<style>
    #splash {
        margin-bottom: 4rem;
    }

    #latest-news-section-image {
        width: 33rem;
        object-fit: contain;
        margin-right: 3rem;
    }

    #key-features {
        max-width: 43rem;
        display: flex;
        flex-direction: column;
        row-gap: 4rem;
    }

    #key-features-section-image {
        width: 36rem;
        object-fit: contain;
        margin: 3.5rem 0 0 3rem;
    }
</style>