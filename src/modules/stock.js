// imports
import { handleActions } from 'redux-actions';
import * as api from "../lib/api/stock";


// actions(action type)
const GET_STOCKS = 'stock/GET_STOCKS';
const GET_PROTFOLIO = "stock/GET_PORTFOLIO";


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

const getPortfolio = () => async dispatch => {
    try {
        const response = await api.readPortfolio();
        dispatch({
            type: GET_PROTFOLIO,
            payload: response.data
        });
    } catch(e) {
        throw e
    }
}


// init state
const initialState = {
    stocks: null,
    portfolio: null
};


// reducer
const stock = handleActions(
    {
     [GET_STOCKS]: (state, action) => ({
         ...state,
         stocks: action.payload
     }),
     [GET_PROTFOLIO]: (state, action) => ({
        ...state,
        portfolio: action.payload
     })
    },
    initialState
);


// Exports
export const actionCreators = {
    getFeed,
    getPortfolio
};

export default stock;
