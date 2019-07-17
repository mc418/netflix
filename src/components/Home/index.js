import React, { Component } from 'react';
import '../../App.css';
import List from '../List';
import MyList from '../MyList';
import Recommend from '../Recommend';
import * as actions from '../../redux/actions';
import { connect } from 'react-redux';
import logo from './logo.jpg'
class Home extends Component {
    componentDidMount() {
        this.props.loadList();
    }

    render() {
        const {list, recommend} = this.props;
        return (
            <div>
                {/* <h1>NETFLIX</h1> */}
                <img className="logo" src={logo} alt="NETFLIX" />
                <MyList />
                <Recommend rec={recommend} />
                <List myList={list} />
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
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);