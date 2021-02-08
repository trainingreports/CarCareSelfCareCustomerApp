import constants from '../constants';
const { SIGNUP_USER } = constants;
const initialState = [];
export default function signupReducer (state = initialState, action) {
    switch (action.type) {
        case SIGNUP_USER:
            return { ...state, signup_data: action.Payload ? action.Payload : {} };
        default:
            return state
    }
}