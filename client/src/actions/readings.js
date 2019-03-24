import axios from 'axios';
import moment from 'moment';
import { SET_MASS_READINGS } from './types';

export const getMassReadings = () => dispatch => {
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
            })
        })
        .catch(err => {
            if (err) throw err;
        });
};