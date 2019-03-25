import axios from 'axios';
import moment from 'moment';
import { SET_MASS_READINGS, READINGS_LOADING } from './types';

export const getMassReadings = () => dispatch => {
    dispatch(setReadingsLoading());
    const today = new moment().format('YYYYMMDD');
    axios.get(`http://universalis.com/Europe.England.Westminster/${today}/jsonpmass.js`)
        .then(res => {
            let newResponse = res.data.replace('universalisCallback(', '');
            newResponse = newResponse.replace(');', '');
            newResponse = newResponse.replace(/(<([^>]+)>)/ig," ");
            newResponse = newResponse.replace(/&#8220;/ig, "''");
            newResponse = newResponse.replace(/&#8221;/ig, "''");
            newResponse = newResponse.replace(/&#8211;/ig, "-");
            newResponse = newResponse.replace(/&#8216;/ig, "''");
            newResponse = newResponse.replace(/&#8217;/ig, "'");
            newResponse = newResponse.replace(/&#160;/ig, ' ');
            newResponse = JSON.parse(newResponse);

            dispatch({
                type:SET_MASS_READINGS,
                payload: newResponse
            });
        })
        .catch(err => {
            dispatch({
                type:SET_MASS_READINGS,
                payload: {}
            });
        });
};

export const setReadingsLoading = () => {
    return {
        type: READINGS_LOADING
    }
};