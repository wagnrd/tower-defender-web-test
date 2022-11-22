import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import styles from "./NewsArticlePreview.module.css";
import { formatDate } from "../utils";
import { ArticlePreview } from "../news-articles";
import logoDarkImage from "../../assets/images/logo-dark.svg";
import { useApp } from "../AppProvider";
import classnames from "classnames";

interface NewsArticlePreviewProps {
    articlePreview: ArticlePreview;
}

function NewsArticlePreview({ articlePreview }: NewsArticlePreviewProps): ReactElement {
    const { isMobile } = useApp();

    return (
        <div className={classnames(isMobile && styles.mobile, styles.articlePreview)}>
            <h2 className={styles.headline}>{articlePreview.headline}</h2>
            {isMobile
             ? <p className={styles.date}>{formatDate(articlePreview.timestamp)}</p>
             : <h3 className={styles.date}>{formatDate(articlePreview.timestamp)}</h3>
            }
            <img src={articlePreview.thumbnailUrl ?? logoDarkImage} className={styles.thumbnail} alt=""/>
            <div className={styles.description}>
                {articlePreview.description}<br/>
                <br/>
                <Link to={`/news/${articlePreview.id}`}>Read news</Link>
            </div>
        </div>
    );
}

export default NewsArticlePreview;