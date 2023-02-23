import { CustomErrorBuilder } from "../utils/customError";
import { ValidateHelper } from "../utils/validateHelper";
import { findEmptyParameters, checkIfEmpty } from "../utils/utils";
import { Messages } from "../utils/constants";
import { User } from "../models/user";

class AuthenticationParameters{
    static LOGIN = ["username", "password"];
    static REGISTER = ["password", "email", "username", "isManager", "isActive", "teamName", "name"]
}


abstract class AuthenticationValidator{
    static validateEmptyUser(user: User): ValidateHelper{
        let validateHelper = new ValidateHelper();
        if(!user){
            validateHelper.setError(CustomErrorBuilder
                        .withMessage("No user provided")
                        .withStatus(400)
                        .build());
        }
        return validateHelper;
    }

    static validateEmptyParameters(parameters: string[], user: User): ValidateHelper{
        let validateHelper = new ValidateHelper();
        let emptyParameters = findEmptyParameters(parameters, user)
        
        if(!checkIfEmpty(emptyParameters)){
            validateHelper.setError(CustomErrorBuilder
                .withMessage(Messages.MISSINGARGUMENTS)
                .withField(emptyParameters)
                .withStatus(400)
                .build());
            return validateHelper
        }
        return validateHelper
    }

    static validate(user: User) : ValidateHelper{
        throw new Error("Method not implemented");
    };

}

class LoginValidator implements AuthenticationValidator{
    static validate(user: User) {
        let errorResult = AuthenticationValidator.validateEmptyUser(user);
        if(errorResult.getError()){
            return errorResult;
        }
        errorResult = AuthenticationValidator.validateEmptyParameters(AuthenticationParameters.LOGIN, user);
        if(errorResult.getError()){
            return errorResult;
        }
        return new ValidateHelper();
    }
    
}

class RegisterValidator implements AuthenticationValidator{
    static validate(user: User) {
        let errorResult = AuthenticationValidator.validateEmptyUser(user);
        if(errorResult.getError()){
            return errorResult;
        }
        errorResult = AuthenticationValidator.validateEmptyParameters(AuthenticationParameters.REGISTER, user);
        if(errorResult.getError()){
            return errorResult;
        }
        return new ValidateHelper();
    }
}

export {LoginValidator, RegisterValidator, AuthenticationParameters};