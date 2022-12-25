import axios from 'axios';
import {GET_DATA} from "./actionTypes";

const getData = (datas) => ({
    type: GET_DATA,
    payload: datas,
})

export const loadData = () => {
    return function (dispatch) {
        axios.get(`http://localhost:5000/data`)
            .then((res) => {
                console.log(res,"response");
                dispatch(getData(res.data));
            })
            .catch((err) => console.log(err));
    }
}