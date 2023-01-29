// imports
// import { createAction, handleActions } from 'redux-actions';


// actions(action type)
const SAMPLE_ACTION = 'auth/SAMPLE_ACTION';


// action creator
export const sampleAction = () => ({ type: SAMPLE_ACTION });
// export const sampleAction = createAction(SAMPLE_ACTION);


// init state
const initialState = {
    auth: null,
    authError: null
};


// reducer
const auth = (state=initialState, action) => {
    switch(action.type) {
        case SAMPLE_ACTION:
            console.log("sample action");
            return state;
        default:
            return state;
    }
}

export default auth;
