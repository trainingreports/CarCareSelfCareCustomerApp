import axios from 'axios';
import constants from '../constants';

const { SIGNUP_USER, BASE_URL, CHECK_EMAIL, CHECK_MOBILE_NUMBER } = constants;

export function signup_user(data) {
    
    return function (dispatch) {
        return axios.post(`${BASE_URL}user-sign-up`, data)
            .then(response => {
                if(response.data) {
                    if (response.data.status) {
                        dispatch({
                            type: SIGNUP_USER,
                            Payload: response.data.status
                        })
                    } else {
                        alert(response.data.message);
                    }
                }
            })
            .catch(error => console.log(error));
    };
}

export function checkMobileNumber(data) {
    
    return function (dispatch) {
        return axios.post(`${BASE_URL}check-phone`, data)
            .then(response => {
                if(response.data) {
                    if (response.data.status) {
                        dispatch({
                            type: CHECK_MOBILE_NUMBER,
                            Payload: response.data.status
                        })
                    } else {
                        alert(response.data.message);
                    }
                }
            })
            .catch(error => console.log(error));
    };
}

export function checkEmail(data) {

    return function (dispatch) {
        return axios.post(`${BASE_URL}check-email`, data)
            .then(response => {
                if(response.data) {
                    if (response.data.status) {
                        dispatch({
                            type: CHECK_EMAIL,
                            Payload: response.data.status
                        })
                    } else {
                        alert(response.data.message);
                    }
                }
            })
            .catch(error => console.log(error));
    };
}
