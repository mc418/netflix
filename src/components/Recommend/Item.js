import React, { Component } from 'react';
import '../../App.css';

class Item extends Component {
    render() {
        const { item } = this.props;
        return (
            <div className="item">
                <img className="image" src={item.img} alt={item.title} />
                <div className="middle">
                    <div className="title">{item.title}</div>
                    <button onClick={this.props.handleClick}>
                        <i class="fas fa-plus" />
                    </button>
                </div>
            </div>
        )
    }
}

export default Item;