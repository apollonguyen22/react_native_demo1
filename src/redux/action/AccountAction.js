/* eslint-disable no-alert */
import {accountService} from '../../service/AccountService';
import {GET_ALL_ACCOUNT, LOGIN, PROFILE, SIGN_UP, SIGN_UP2} from '../action/type/AccountType';

export const signupAction = (account) => {
    return async (dispatch) => {
        try {
            const result = await accountService.signupService(account);

            dispatch({
                type: SIGN_UP,
                acc: result.data,
            });

            alert('Sign up Success');
        } catch (e) {
            alert(e.message);
        }
    };
};

export const getallAccountAction = () => {
    return async (dispatch) => {
        try {
            const result = await accountService.getAllAccount();

            dispatch({
                type: GET_ALL_ACCOUNT,
                arrAccount: result.data,
            });
        } catch (e) {
            alert(e.message);
        }
    };
};

export const signUpAction111 = (newUser) => ({
    type: SIGN_UP2,
    newUser,
});

export const loginAction = (userLogin) => ({
    type: LOGIN,
    userLogin,
});
