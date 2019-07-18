import axios from "axios"

function loadListRequest() {
    return {
        type: "LOAD_LIST_REQUEST"
    }
}

function loadListSuccess(response) {
    return {
        type: "LOAD_LIST_SUCCESS",
        data: response.data
    }
}

function loadListFail() {
    return {
        type: "LOAD_LIST_FAIL"
    }
}

export const loadList = () => {
    return (dispatch, getState) => {
        dispatch(loadListRequest());
        axios
        .get('/data.json')
        .then(response => {
            dispatch(loadListSuccess(response));
            console.log(response);
        })
        .catch(error => {
            dispatch(loadListFail(error));
        });
    };
}

export const addToList = (data) => {
    return {
        type: "ADD_TO_LIST",
        data: data
    }
}

export const removeFromList = (data) => {
    return {
        type: "REMOVE_FROM_LIST",
        data: data
    }
}