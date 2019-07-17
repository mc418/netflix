const initState = {
    myList: [],
    recommend: []
}

const reducer = (state=initState, action) => {
    switch(action.type) {
        case "LOAD_LIST_REQUEST": {
            return {
                ...state
            }
        }
        case "LOAD_LIST_SUCCESS": {
            return {
                ...state,
                myList: action.data.mylist,
                recommend: action.data.recommendations
            }
        }
        case "LOAD_LIST_FAIL": {
            return {
                ...state
            }
        }
        case "ADD_TO_LIST":
            return {
                myList: [...state.myList, action.data],
                recommend: state.recommend.filter(item => { 
                    return item.id !== action.data.id
                })
            }
        case "REMOVE_FROM_LIST":
            return {
                myList: state.myList.filter(item => { 
                    return item.id !== action.data.id
                }),
                recommend: [...state.recommend, action.data]
            }
        default:
            return state
    }
}

export default reducer