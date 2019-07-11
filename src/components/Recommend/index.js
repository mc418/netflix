import React, { Component } from 'react';
import '../../App.css';
import * as actions from '../../redux/actions';
import { connect } from 'react-redux';
import Item from './Item';

class Recommend extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        const { rec } = this.props;
        return (
            <div>
                <h2>Recommendation</h2>
                <div className="item-container">
                    {rec.map(item => (
                        <Item item={item} handleClick={() => this.props.addToList(item)}/>
                    ))}
                    {rec.length === 0 && <p>seems like you got all we have, we'll get you more asap!</p>}
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
        addToList: (data) => {
            dispatch(actions.addToList(data))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Recommend);