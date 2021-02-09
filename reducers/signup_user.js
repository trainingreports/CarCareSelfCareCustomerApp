import constants from '../constants';
const { SIGNUP_USER, CHECK_MOBILE_NUMBER, CHECK_EMAIL } = constants;
const initialState = [];
export default function signupReducer (state = initialState, action) {
    switch (action.type) {
        case SIGNUP_USER:
            return { ...state, signup_data: action.Payload ? action.Payload : {} };
        case CHECK_MOBILE_NUMBER:
            return { ...state, check_mobile: action.Payload ? action.Payload : false };
        case CHECK_EMAIL:
            return { ...state, check_email: action.Payload ? action.Payload : false };
        default:
            return state
    }
}