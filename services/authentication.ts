// create a class for authentication containing functions like login, register, forgot password, etc.
import { buildResponse } from '../utils/utils';
// import { validateRegistration } from '../validators/registerValidator';
import { RegisterValidator, LoginValidator } from '../validators/authenticationValidator';
import { User } from '../models/user';


class Authentication {

    static async login(user: User){
        const validationResult = LoginValidator.validate(user);
        if(validationResult.error){
            return validationResult.getErrorResponse();
        }
        return buildResponse(200, {message: "Login successful"});
    }

    static async register(user: User){
        const validationResult = RegisterValidator.validate(user);
        if(validationResult.error){
            return validationResult.getErrorResponse();
        }
        return buildResponse(200, {message: "Register Successfull"})
    }

}

export {Authentication};