import { combineReducers } from 'redux';
import readingsReducer from './readingsReducer';

export default combineReducers({
    readings: readingsReducer
});