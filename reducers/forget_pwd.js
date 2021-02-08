import constants from '../constants';
const { FORGOT_PWD } = constants;
const initialState = [];
export default function forgotPwdReducer (state = initialState, action) {
    switch (action.type) {
        case FORGOT_PWD:
            return { ...state, recover_pwd: action.Payload ? action.Payload : {} };
        default:
            return state
    }
}