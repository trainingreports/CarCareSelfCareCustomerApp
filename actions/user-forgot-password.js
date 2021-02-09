import axios from 'axios';
import constants from '../constants';

export function userForgotPwd(phone) {
    // let param = {
    //     "phone": phone
    // }
    const { FORGOT_PWD, BASE_URL } = constants;
    
    return function (dispatch) {
        return axios.post(`${BASE_URL}user-forgot-password`, phone)
            .then(response => {
                if (response.data.status) {
                    dispatch({
                        type: FORGOT_PWD,
                        Payload: response.data.data
                    })
                } else {
                    alert(response.data.message);
                }
            })
            .catch(error => console.log(error));
    };
}
