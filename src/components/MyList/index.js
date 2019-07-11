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
                <h2>List</h2>
                <div className="item-container">
                    {list.map(item => (
                        <Item item={item} handleClick={() => {this.props.remove(item)}} />
                    ))}
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