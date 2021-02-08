import constants from '../constants';
const { RESET_PASSWORD } = constants;
const initialState = [];
export default function resetPwdReducer (state = initialState, action) {
    switch (action.type) {
        case RESET_PASSWORD:
            return { ...state, reset_password: action.Payload ? action.Payload : "" };
        default:
            return state
    }
}