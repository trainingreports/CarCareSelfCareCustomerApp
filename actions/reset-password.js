import axios from 'axios';
import constants from '../constants';

export function resetPwd(data) {

    const { RESET_PASSWORD, BASE_URL } = constants;
    
    return function (dispatch) {
        return axios.post(`${BASE_URL}user-reset-password`, data)
            .then(response => {
                if(response.data) {
                    if (response.data.status) {
                        dispatch({
                            type: RESET_PASSWORD,
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
