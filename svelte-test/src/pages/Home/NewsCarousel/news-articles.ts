import {config} from "../../../config";

interface ArticlePreview {
    id: number;
    headline: string;
    description: string;
    date: Date;
    thumbnailUrl?: string;
}

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