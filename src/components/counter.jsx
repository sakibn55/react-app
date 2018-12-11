import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count:0,
        imageUrl: 'https://picsum.photos/200',
        tags: ["tag1", "tag2","tag3"]
    };

    style = {
        fontSize: 10,
        fontWeight:'bold'
    }

    renderTags(){
        if(this.state.tags.length === 0 ) return <p>There are no tags</p>;
        return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;
    }

    handleIncrement = id =>{
        console.log(id);
        this.setState({ count: this.state.count +1 });
    }

    render() { 

        return (
            <div className="container">
                <div><img className="img-responsive" src={this.state.imageUrl} alt=""/></div>
                <span style={ this.style } className={ this.getBandgeClass() }>{this.formatCount()}</span>
                <button onClick={() => this.handleIncrement({ id : 1 })} className="btn btn-secondary btn-sm">Increment</button>
                <div>{this.renderTags()}</div>
            </div>
        );
    }
    getBandgeClass() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const { count } = this.state;
        return count === 0 ? 'zero' : count;
    }
}
 
export default Counter;