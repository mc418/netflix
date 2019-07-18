import React, { Component } from 'react';
import '../../App.css';
import Movies from '../Movies';
import * as actions from '../../redux/actions';
import { connect } from 'react-redux';
import logo from './logo.jpg'
class Home extends Component {
    componentDidMount() {
        this.props.loadList();
    }

    render() {
        const {list, recommend, remove, addToList} = this.props;
        return (
            <div>
                <img className="logo" src={logo} alt="NETFLIX" />
                <Movies ls={list} act={remove} name={"myList"} />
                <Movies ls={recommend} act={addToList} name={"recommend"} />
                <h2>List</h2>
                <ul>
                    {list.map(item => (
                        <li key={item.id}>
                            {item.title}
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        list: state.myList,
        recommend: state.recommend
    };
};

const mapDispatchToProps = dispatch => {
    return {
        loadList: () => {
            dispatch(actions.loadList())
        },
        addToList: (data) => {
            dispatch(actions.addToList(data))
        },
        remove: (data) => {
            dispatch(actions.removeFromList(data))
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Home);