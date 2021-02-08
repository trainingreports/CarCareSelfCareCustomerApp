import { combineReducers } from 'redux';
import userLoginReducer from './login_user';
import forgotPwdReducer from './forget_pwd';
import userCheckReducer from './verify_otp';
import resetPwdReducer from './reset_pwd';
import signupReducer from './signup_user';
import mainReducer from './main_reducer';

export default combineReducers({
    userLoginReducer,
    forgotPwdReducer,
    userCheckReducer, 
    resetPwdReducer,
    signupReducer,
    mainReducer
})