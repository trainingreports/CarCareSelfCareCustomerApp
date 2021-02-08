import axios from 'axios';
import constants from '../constants';

export function signup_user(name, email, phone, city, country, password) {

    const { SIGNUP_USER, BASE_URL } = constants;
    
    return function (dispatch) {
        return axios.post(`${BASE_URL}user-sign-up`, { name, email, phone, city, country, password })
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
