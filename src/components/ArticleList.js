import React from 'react';
import Article from './Article';

export default function ArticleList({ articles }) {
    const articlesElments = articles.map((article, index) => {
        return <li key = {article.id}><Article article={article} defaultOpen={index === 0}/></li>
    });

    return (
        <ul>
            {articlesElments}
        </ul>
    )
}