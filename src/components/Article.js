import React, {Component} from 'react';

class Article extends Component {
    state = {
        isOpen: this.props.defaultOpen,
    }

    componentWillMount() {
        console.log('---', 'mounting');
    }

    componentWillReceiveProps(newProps) {
        console.log('---', 'willReceiveProps');

        if(newProps.defaultOpen !== this.props.defaultOpen) {
            this.setState({
                isOpen: newProps.defaultOpen,
            });
        }
    }

    componentWillUpdate() {
        console.log('---', 'willUpdate');
    }

    render() {
        const {article} = this.props,
            body = this.state.isOpen && <section>{article.text}</section>;

        return (
            <div>
                <h2>
                    {article.title}
                    <button onClick={this.handleClick}>
                        {this.state.isOpen ? 'close' : 'open'}
                    </button>
                </h2>
                {body}
                <h3>creation date: {(new Date(article.date)).toDateString()}</h3>
            </div>
        )
    }

    handleClick = () => {
        console.log('---', 'clicked');
        this.setState({
            isOpen: !this.state.isOpen,
        });
    }
}

export default Article;