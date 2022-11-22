import React, { ReactElement, useEffect, useState } from "react";
import NewsArticlePreview from "../../../lib/NewsArticlePreview/NewsArticlePreview";
import { ArticlePreview, fetchArticlePreviews } from "../../../lib/news-articles";
import { LoadingState } from "../../../lib/utils";

function NewsCarousel(): ReactElement {
    const [loadingStatus, setLoadingSatus] = useState<LoadingState>("loading");
    const [articlePreviews, setArticlePreviews] = useState<ArticlePreview[]>([]);

    useEffect(() => {
        const execute = async (): Promise<void> => {
            try {
                const result = await fetchArticlePreviews(4);
                setArticlePreviews(result);
                setLoadingSatus("done");
            } catch (_) {
                setLoadingSatus("error");
            }
        };
        execute();
    }, []);

    let articlePreviewItems: ReactElement | ReactElement[];

    if (loadingStatus === "loading")
        articlePreviewItems = <h2>Loading articles...</h2>;
    else if (loadingStatus === "error")
        articlePreviewItems = <h2>Error loading articles</h2>;
    else if (loadingStatus === "done" && articlePreviews.length === 0)
        articlePreviewItems = <h2>No articles</h2>;
    else
        articlePreviewItems = articlePreviews.map(
            preview => <NewsArticlePreview articlePreview={preview} key={`article-preview-${preview.id}`}/>);

    return (
        <>
            {articlePreviewItems}
        </>
    );
}

export default NewsCarousel;