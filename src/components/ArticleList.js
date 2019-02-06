import React, {PureComponent} from 'react';
import Article from './Article';

class ArticleList extends PureComponent {
    render() {
        const articlesElments = this.props.articles.map((article, index) => {
            return <li key = {article.id}><Article article={article} defaultOpen={index === 0}/></li>
        });
    
        return (
            <ul>
                {articlesElments}
            </ul>
        )
    }    
}

export default ArticleList;