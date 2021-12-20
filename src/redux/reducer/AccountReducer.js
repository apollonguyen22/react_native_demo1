/* eslint-disable no-alert */
import { GET_ALL_ACCOUNT, LOGIN, PROFILE, SIGN_UP2 } from '../action/type/AccountType';


const stateDefault = {
    arrAccount: [
        {
            username: 'u1',
            email: 'a@gmail.com',
            password: '123',
            confirmPassword: '123',
        },
        {
            username: 'u2',
            email: 'b@gmail.com',
            password: '123',
            confirmPassword: '123',
        },
    ],
    userLoginDetail: [],
};

export const AccountReducer = (state = stateDefault, action) => {
    switch (action.type){
        case GET_ALL_ACCOUNT: {
            state.arrAccount = action.arrAccount;
            return {...state};
        }

        case SIGN_UP2: {
            let arrUpadate = [...state.arrAccount];
            let index = arrUpadate.findIndex(user => user.username === action.newUser.username);
            if (index !== -1) {
                alert('Username already exitst');
                return {...state};
            }
            arrUpadate.push(action.newUser);
            state.arrAccount = arrUpadate;
            return {...state};
        }

        case LOGIN: {
            state.userLoginDetail = [...state.arrAccount];
            let index = state.userLoginDetail.findIndex(user => user.username === action.userLogin.username && user.password === action.userLogin.password);
            if (index !== -1) {
                alert('Login Successful');
                state.userLoginDetail = state.userLoginDetail.filter(us => us.username === action.userLogin.username);
            } else {
                alert('Login Failed');
                return {...state};
            }
            return {...state};
        }

        default: return {...state};
    }
};
