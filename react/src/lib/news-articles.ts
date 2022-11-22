import { config } from "../config";

interface ArticlePreview {
    id: number;
    headline: string;
    description: string;
    timestamp: number;
    thumbnailUrl?: string;
}

interface Article {
    id: number;
    headline: string;
    body: string;
    timestamp: number;
}

async function fetchArticlePreviews(count: number, offset = 0): Promise<ArticlePreview[]> {
    let url = `${config.newsApiBaseUrl}/article/preview?count=${count}&offset=${offset}`;

    // @ts-ignore // can't be undefined... duh..
    if (config.testing.enableArticlePadding) url += "&padding=1";

    const response = await fetch(url);
    const result = await response.json();

    if (!response.ok) {
        console.error(
            `[News Articles] Response not ok (${response.status}: ${response.statusText}) while fetching article previews:\n${result}`);
        throw Error();
    }

    return result;
}

async function fetchArticleById(id: number): Promise<ArticlePreview[]> {
    let url = `${config.newsApiBaseUrl}/article/${id}`;

    // @ts-ignore // can't be undefined... duh..
    if (config.testing.enableArticlePadding) url += "?padding=1";

    const response = await fetch(url);
    const result = await response.json();

    if (!response.ok) {
        console.error(
            `[News Articles] Response not ok (${response.status}: ${response.statusText}) while fetching an article:\n${result}`);
        throw Error();
    }

    return result;
}

export { fetchArticlePreviews, fetchArticleById };
export type { ArticlePreview, Article };