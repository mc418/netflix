import React, { Component } from 'react';
import '../../App.css';

class Item extends Component {
    render() {
        const { item, name } = this.props;
        return (
            <div className="item">
                <img className="image" src={item.img} alt={item.title} />
                <div className="middle">
                    <div className="title">{item.title}</div>
                    <button onClick={this.props.handleClick}>
                        {name==="recommend"
                        ?
                        <i className="fas fa-plus" />
                        :
                        <i className="far fa-trash-alt" />
                    }
                    </button>
                </div>
            </div>
        )
    }
}

export default Item;