import axios from 'axios';
import constants from '../constants';

export function verifyOtp(data) {

    const { USER_CHECK_OTP, BASE_URL } = constants;
    
    return function (dispatch) {
        return axios.post(`${BASE_URL}user-check-otp`, data)
            .then(response => {
                if(response.data) {
                    if (response.data.status) {
                        dispatch({
                            type: USER_CHECK_OTP,
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
