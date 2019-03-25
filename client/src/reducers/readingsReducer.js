import { READINGS_LOADING, SET_MASS_READINGS } from '../actions/types';

const initialState = {
    loading: false
};

export default (state = initialState, action) => {
    switch(action.type) {
        case SET_MASS_READINGS:
            return {
                ...state,
                massReadings: action.payload,
                loading: false
            }

        case READINGS_LOADING:
            return {
                ...state,
                loading: true
            }
        default: 
            return state;
    }
}