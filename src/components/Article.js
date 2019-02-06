import React, {PureComponent} from 'react';

class Article extends PureComponent {
    state = {
        isOpen: this.props.defaultOpen,
        count: 0
    }

    /*shouldComponentUpdate(nextProps, nextState) {
        return this.state.isOpen !== nextState.isOpen;
    }*/

    componentWillMount() {
        console.log('---', 'mounting');
    }

    componentWillReceiveProps(newProps) {
        if(newProps.defaultOpen !== this.props.defaultOpen) {
            this.setState({
                isOpen: newProps.defaultOpen
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
                <h2 onClick = {this.incrementCounter}>                    
                    {article.title}          
                    clicked {this.state.count}          
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
            isOpen: !this.state.isOpen
        });
    }

    incrementCounter = () => {
        this.setState({
            count: this.state.count + 1
        });
    }
}

export default Article;