import { GET_ALL_ACCOUNT } from "../action/type/AccountType";


const stateDefault = {
    arrAccount: [],
};

export const AccountReducer = (state = stateDefault, action) => {
    switch(action.type){
        case GET_ALL_ACCOUNT: {
            state.arrAccount = action.arrAccount;
            return {...state};
        }

        default: return {...state};
    }
};
