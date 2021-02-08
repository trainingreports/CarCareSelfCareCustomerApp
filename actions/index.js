import * as login_action from './login-action';
import * as forgotPwd_action from './user-forgot-password';
import * as usercheckotp_action from './verify-otp';
import * as resetPwd_action from './reset-password';
import * as signUp_action from './signup-action';
import * as main_action from './main-action';

const allActions = {...login_action, ...forgotPwd_action, ...usercheckotp_action,
    ...resetPwd_action, ...signUp_action, ...main_action};
export {allActions};
