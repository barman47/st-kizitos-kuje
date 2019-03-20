import { SET_MASS_READINGS } from '../actions/types';

const initialState = {};

export default (state = initialState, action) => {
    switch(action.type) {
        case SET_MASS_READINGS:
            return {
                ...state,
                massReadings: action.payload
            }
        default: 
            return state;
    }
}