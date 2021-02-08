import axios from 'axios';
import constants from '../constants';

export function userLogin(email, password) {

  const { BASE_URL, LOGIN_USER } = constants;
  let param = {
    "email": email,
    "password": password
  };
  
  return function (dispatch) {
    return axios.post(`${BASE_URL}user-login`, param)
      .then(response => {
        console.log("this is login action", response.data)
        if (response.data.status) {
          dispatch({
            type: LOGIN_USER,
            Payload: response.data
          })
        } else {
          alert(response.data.message);
        }
      })
      .catch(error => alert(error));
  };
}
