import constants from '../constants';
const { USER_CHECK_OTP } = constants;
const initialState = [];
export default function userCheckReducer (state = initialState, action) {
    switch (action.type) {
        case USER_CHECK_OTP:
            return { ...state, response_data: action.Payload ? action.Payload : {} };
        default:
            return state
    }
}