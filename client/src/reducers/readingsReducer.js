import { GET_MASS_READINGS } from '../actions/types';

const initialState = {
    massReadings: null
};

export default (state = initialState, action) => {
    switch(action.type) {
        case GET_MASS_READINGS:
            return {
                ...state,
                readings: action.payload
            }

        // case SET_MASS_READINGS:
        //     return {
        //         ...state,

        //     }
        default: 
            return state;
    }
}