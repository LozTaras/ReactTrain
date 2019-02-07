import React, {PureComponent} from 'react';
import Article from './Article';

class ArticleList extends PureComponent {
    state = {
        openArticleId: null
    }

    render() {
        const articlesElments = this.props.articles.map((article, index) => {
            return (
                <li key = {article.id}>
                    <Article article={article} 
                        isOpen = {this.state.openArticleId === article.id}
                        onButtonClick ={this.handleClick.bind(this, article.id)}
                        />
                </li>
            )
        });
    
        return (
            <ul>
                {articlesElments}
            </ul>
        )
    }
    
    handleClick = openArticleId => this.setState({ 
        openArticleId: this.state.openArticleId === openArticleId ? null : openArticleId
    });
}

export default ArticleList;