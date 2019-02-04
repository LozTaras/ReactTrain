import React from 'react';
import Article from './Article';

export default function ArticleList({ articles }) {
    const articlesElments = articles.map(article => {
        return <li key = {article.id}><Article article={article}/></li>
    });

    return (
        <ul>
            {articlesElments}
        </ul>
    )
}