import { baseService } from './baseService';


export class AccountService extends baseService {
    constructor() {
        super();
    }

    getAllAccount = () => {
        return this.get('/user/all');
    }

    signupService = (account) => {
        return this.post('/user/signup',account);
    }
}

export const accountService = new AccountService();

