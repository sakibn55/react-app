import React, { Component } from 'react';

class Counter extends Component {
    state = {
        value:this.props.value,
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

    handleIncrement = () =>{
        this.setState({ value: this.state.count + 1});
    }

    render() { 
      
        return (
            <div className="container">
            {this.props.children}
                <div><img className="img-responsive" src={this.state.imageUrl} alt=""/></div>
                <span style={ this.style } className={ this.getBandgeClass() }>{this.formatCount()}</span>
                <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button>
                <div>{this.renderTags()}</div>
            </div>
        );
    }
    getBandgeClass() {
        let classes = "badge m-2 badge-";
        classes += this.state.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const { value } = this.state;
        return value === 0 ? 'zero' : value;
    }
}
 
export default Counter;