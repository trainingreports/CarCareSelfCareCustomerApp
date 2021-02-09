import constants from '../constants';
const { LOGIN_USER } = constants;
const initialState = [];
export default function userLoginReducer (state = initialState, action) {
    switch (action.type) {
        case LOGIN_USER:
            return { ...state, user_data: action.Payload ? action.Payload : false };
        default:
            return state
    }
}