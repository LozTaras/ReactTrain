import React, {PureComponent} from 'react';

class Article extends PureComponent {
    state = {
        count: 0
    }

    render() {
        const {article, isOpen, onButtonClick} = this.props,
            body = isOpen && <section>{article.text}</section>;

        return (
            <div>
                <h2 onClick = {this.incrementCounter} onMouseDown = {this.preventDefault}>                    
                    {article.title}          
                    clicked {this.state.count}          
                    <button onClick={onButtonClick}>
                        {isOpen ? 'close' : 'open'}
                    </button>  
                </h2>
                {body}
                <h3>creation date: {(new Date(article.date)).toDateString()}</h3>
            </div>
        )
    }

    incrementCounter = () => {
        this.setState({
            count: this.state.count + 1
        });
    }

    preventDefault = evt => {
        evt.preventDefault();
    }
}

export default Article;