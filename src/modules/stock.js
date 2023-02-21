// imports
import { handleActions } from 'redux-actions';
import * as api from "../lib/api/stock";


// actions(action type)
const GET_STOCKS = 'stock/GET_STOCKS';


// action creator
// export const listStocks = () => ({ type: GET_STOCKS });


// API Actions
const getFeed = () => async dispatch => {
    try {
        const response = await api.readStockAndPrice();
        dispatch({
            type: GET_STOCKS,
            payload: response.data
        });
    } catch(e) {
        throw e
    }
}


// init state
const initialState = {
    stocks: null
};


// reducer
const stock = handleActions(
    {
     [GET_STOCKS]: (state, action) => ({
         ...state,
         stocks: action.payload
     })
    },
    initialState
);


// Exports
export const actionCreators = {
    getFeed
};

export default stock;
