import {GET_DATA} from "./actionTypes";

const initState = {
    datas: [],
    data: {},
    loading: true,
};

export const dataReducer = (state = initState, action) => {
    switch (action) {
        case GET_DATA: 
            return {
                ...state,
                datas: action.payload,
                loading: false,
            }

        default: 
            return state;
    }
}