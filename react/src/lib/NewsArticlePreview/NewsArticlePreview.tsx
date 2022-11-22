import React, { ReactElement } from "react";
import styles from "./NewsArticlePreview.module.css";
import { Link } from "react-router-dom";
import { formatDate } from "../utils";
import { ArticlePreview } from "../news-articles";
import logoDarkImage from "../../assets/images/logo-dark.svg";
import { useApp } from "../AppProvider";

interface NewsArticlePreviewProps {
    articlePreview: ArticlePreview;
}

function NewsArticlePreview({ articlePreview }: NewsArticlePreviewProps): ReactElement {
    const { isMobile } = useApp();

    return (
        <div className={styles.articlePreview}>
            <h2 className={styles.headline}>{articlePreview.headline}</h2>
            {isMobile
             ? <p className={styles.date}>{formatDate(articlePreview.timestamp)}</p>
             : <h3 className={styles.date}>{formatDate(articlePreview.timestamp)}</h3>
            }
            <img src={articlePreview.thumbnailUrl ?? logoDarkImage} className={styles.carouselImage} alt=""/>
            <div className={styles.description}>
                {articlePreview.description}<br/>
                <br/>
                <Link to={`/news/${articlePreview.id}`}>Read news</Link>
            </div>
        </div>
    );
}

export default NewsArticlePreview;