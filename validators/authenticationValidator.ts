import { CustomErrorBuilder } from "../utils/customError";
import { ValidateHelper } from "../utils/validateHelper";
import { findEmptyParameters, checkIfEmpty } from "../utils/utils";
import { Messages } from "../utils/constants";
import { User } from "../models/user";
import bcrypt from "bcryptjs/dist/bcrypt";


abstract class AuthenticationValidator{
    static validateEmptyUser(user: User): ValidateHelper{
        let validateHelper = new ValidateHelper();
        if(!user){
            validateHelper.setError(CustomErrorBuilder
                        .setMessage("No user provided")
                        .setStatus(400)
                        .build());
        }
        return validateHelper;
    }

    static validateEmptyParameters(parameters: string[], user: User): ValidateHelper{
        let validateHelper = new ValidateHelper();
        let emptyParameters = findEmptyParameters(parameters, user)
        
        if(!checkIfEmpty(emptyParameters)){
            validateHelper.setError(CustomErrorBuilder
                .setMessage(Messages.MISSINGARGUMENTS)
                .setField(emptyParameters)
                .setStatus(400)
                .build());
            return validateHelper
        }
        return validateHelper
    }

    static validateRequest(user: User) : ValidateHelper{
        throw new Error("Method not implemented");
    };

    static validateInternalResponse(requestData: any, responseData: any) : ValidateHelper{
        throw new Error("Method not implemented");
    }

}

class LoginValidator implements AuthenticationValidator{
    static validateRequest(user: User) {
        let errorResult = AuthenticationValidator.validateEmptyUser(user);
        if(errorResult.getError()){
            return errorResult;
        }
        let parameters = ["password", "username"]
        errorResult = AuthenticationValidator.validateEmptyParameters(parameters, user);
        if(errorResult.getError()){
            return errorResult;
        }
        return new ValidateHelper();
    }

    static validateInternalResponse(requestData: any, responseData: any) : ValidateHelper{
        let errorResult = new ValidateHelper();
        if(!responseData.username || !requestData.password){
            errorResult.setError(CustomErrorBuilder
                                    .setMessage(Messages.INVALIDCREDENTIALS)
                                    .setStatus(400)
                                    .setField("username")
                                    .build())
        }

        console.log(errorResult.error)

        if(!errorResult.error && !bcrypt.compareSync(requestData.password, responseData.password)){
            errorResult.setError(CustomErrorBuilder
                                    .setMessage(Messages.INVALIDCREDENTIALS)
                                    .setStatus(400)
                                    .setField("password")
                                    .build())
            return errorResult;
        }
        
        return errorResult;
    }
    
}

class RegisterValidator implements AuthenticationValidator{
    static validateRequest(user: User) {
        let errorResult = AuthenticationValidator.validateEmptyUser(user);
        if(errorResult.getError()){
            return errorResult;
        }
        let parameters = ["password", "email", "username", "isManager", "isActive", "managerHash", "name"]
        errorResult = AuthenticationValidator.validateEmptyParameters(parameters, user);
        if(errorResult.getError()){
            return errorResult;
        }
        return new ValidateHelper();
    }
}

export {LoginValidator, RegisterValidator};