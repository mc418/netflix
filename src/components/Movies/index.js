import React, { Component } from 'react';
import '../../App.css';
import Item from './Item';

class Movies extends Component {
    render() {
        const { ls, name } = this.props;
        return (
            <div>
                {name==="recommend"
                ?
                <h2>Recommendation</h2>
                :
                <h2>My List</h2>
                }
                <div className="item-container">
                    {ls.map(item => (
                        <Item key={item.id} item={item} handleClick={() => this.props.act(item)} name={name} />
                    ))}
                    {ls.length === 0 
                    ? 
                    name==="recommend" 
                        ? 
                        <p>seems like you got all we have, we'll get you more asap!</p>
                        :
                        <p>whoops, nothing in your list yet, add something from recommendation!</p>
                    :
                    null
                    }
                </div>
            </div>
        )
    }
}

export default Movies;