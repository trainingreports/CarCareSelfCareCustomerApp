import axios from 'axios';
import constants from '../constants';

export function getSliderImage() {

    const { GET_SLIDE_IMAGE, BASE_URL } = constants;
    
    return function (dispatch) {
        return axios.get(`${BASE_URL}get-banner`)
            .then(response => {
                if(response.data) {
                    if (response.data.status) {
                        dispatch({
                            type: GET_SLIDE_IMAGE,
                            Payload: response.data.data
                        })
                    } else {
                        alert(response.data.message);
                    }
                }
            })
            .catch(error => console.log(error));
    };
}

export function getServices() {

    const { GET_SERVICES_DATA, BASE_URL } = constants;
    
    return function (dispatch) {
        return axios.get(`${BASE_URL}self-care`)
            .then(response => {
                if(response.data) {
                    if (response.data.status) {
                        dispatch({
                            type: GET_SERVICES_DATA,
                            Payload: response.data.data
                        })
                    } else {
                        alert(response.data.message);
                    }
                }
            })
            .catch(error => console.log(error));
    };
}
