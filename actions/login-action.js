import axios from 'axios';
import constants from '../constants';

export function userLogin(data) {

  const { BASE_URL, LOGIN_USER } = constants;
  
  return function (dispatch) {
    return axios.post(`${BASE_URL}user-login`, data)
      .then(response => {
        
        if (response.data.status) {
          dispatch({
            type: LOGIN_USER,
            Payload: response.data.status
          })
        } else {
          alert(response.data.message);
        }
      })
      .catch(error => alert(error));
  };
}
