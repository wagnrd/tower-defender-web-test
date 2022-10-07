import {config} from "../../../config";

interface ArticlePreview {
    id: number;
    headline: string;
    description: string;
    date: Date;
    thumbnailUrl?: string;
}

const test = {
    headline: "Early sneak peak!",
    description: "A new concept scene of the game has been revealed! See pictures and videos of how the game might look like in the future.",
    date: "27.09.2022",
    imageUrl: "./new-concept-thumbnail.jpg"
};

async function fetchArticlePreviews(count: number, offset = 0): Promise<ArticlePreview[]> {
    const url = `${config.newsApiBaseUrl}/article/preview?count=${count}&offset=${offset}`;
    const response = await fetch(url);
    const result = await response.json();

    if (!response.ok) {
        console.error(`[News Articles] Response not ok (${response.status}: ${response.statusText}) while fetching article previews:\n${result}`);
        throw Error();
    }

    return result;
}

export {fetchArticlePreviews};
export type {ArticlePreview};