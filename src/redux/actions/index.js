import jsonData from "../../data/data.json";
const loadData = () => JSON.parse(JSON.stringify(jsonData));
const data = loadData();

export const loadList = () => {
    return {
        type: "LOAD_LIST",
        data: data
    }
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