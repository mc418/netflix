import React, { Component } from 'react';
import '../../App.css';

class Item extends Component {
    render() {
        const { item } = this.props;
        return (
            <div className="item">
                <img src={item.img} alt={item.title} />
                <div className="title">{item.title}</div>
                <button onClick={this.props.handleClick}>+</button>
            </div>
        )
    }
}

export default Item;