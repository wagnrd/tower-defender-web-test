interface ShortArticle {
    headline: string;
    description: string;
    date: string;
    imageUrl?: string;
}

async function sleep() {
    await new Promise((resolve) => setTimeout(resolve, 1000));
}

async function fetchLatestNewsArticles(): Promise<ShortArticle[]> {
    await sleep();

    return [{
        headline: "Early sneak peak!",
        description: "A new concept scene of the game has been revealed! See pictures and videos of how the game might look like in the future.",
        date: "27.09.2022",
        imageUrl: "./new-concept-thumbnail.jpg"
    }, {
        headline: "Some other news!",
        date: "26.09.2022",
        description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat. At vero eos et accusam et justo duo dolores et ea rebum.",
    }, {
        headline: "Again other news!",
        date: "25.09.2022",
        description: "It is quite the same but... you know... Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
    }, {
        headline: "Even more news!",
        date: "24.09.2022",
        description: "Wow! Damn! Such awesome! Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.",
    }];
}

export {fetchLatestNewsArticles};
export type {ShortArticle};