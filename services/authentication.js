// create a class for authentication containing functions like login, register, forgot password, etc.
import { buildResponse } from '../utils/utils';
import { validateLogin } from '../validators/loginValidator';
class Authentication {
   


    login(user){
        const validationResult = validateLogin(user);

        if(validationResult.error){
            return validationResult.getErrorResponse();
        }
        // TODO get user from database
        // TODO compare password
        // TODO return token with response.
        return buildResponse(200, {message: "Login successful"});

}




}