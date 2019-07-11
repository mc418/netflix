import React, { Component } from 'react';
import '../../App.css';

class List extends Component {
    render() {
        const { myList } = this.props;
        return (
            <div>
                <h2>My List</h2>
                <ul>
                    {myList.map(item => (
                        <li>
                            {item.title}
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default List;