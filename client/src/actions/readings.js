import axios from 'axios';
import moment from 'moment';
import { GET_MASS_READINGS, SET_MASS_READINGS } from './types';

export const getMassReadings = () => dispatch => {
    const today = new moment().format('YYYYMMDD');
    console.log('Fetching readings...');
    axios.get(`http://universalis.com/Europe.England.Westminster/${today}/jsonpmass.js`)
        .then(res => {
            console.log(res.data)
            dispatch({
                type: GET_MASS_READINGS,
                payload: res.data
            })
        })
        .catch(err => console.log(err));
};

// export const setMassReadings = () => {
//     return {
//         type: SET_MASS_READINGS
//     };
// };