import React, { Component } from 'react';
import '../../App.css';
import * as actions from '../../redux/actions';
import { connect } from 'react-redux';
import Item from './Item';

class MyList extends Component {
    render() {
        const { list } = this.props;
        return (
            <div>
                <h2>My List</h2>
                <div className="item-container">
                    {list.map(item => (
                        <Item key={item.id} item={item} handleClick={() => {this.props.remove(item)}} />
                    ))}
                    {list.length === 0 && <p>whoops, nothing in your list yet, take a look at recommendation!</p>}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        list: state.myList,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        remove: (data) => {
            dispatch(actions.removeFromList(data))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MyList);