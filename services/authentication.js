// create a class for authentication containing functions like login, register, forgot password, etc.
import { buildResponse } from '../utils/utils';
import { validateLogin } from '../validators/loginValidator';
import { validateRegistration } from '../validators/registerValidator';


class Authentication {

    static async login(user){
        const validationResult = validateLogin(user);
        if(validationResult.error){
            return validationResult.getErrorResponse();
        }
        return buildResponse(200, {message: "Login successful"});
    }

    static async register(user){
        const validationResult = validateRegistration(user);
        if(validationResult.error){
            return validationResult.getErrorResponse();
        }
        return buildResponse(200, {message: "Register Successfull"})
    }

}

export {Authentication};