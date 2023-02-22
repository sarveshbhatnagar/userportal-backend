
import { CustomErrorBuilder } from "../utils/customError";
import { ValidateHelper } from "../utils/validateHelper";
import { findEmptyParameters, checkIfEmpty } from "../utils/utils";


function validateLogin(user){
    let validateHelper = new ValidateHelper();
    if(!user){
        validateHelper.setError(CustomErrorBuilder
                    .setMessage("No user provided")
                    .setStatus(400)
                    .build());

        return validateHelper;

    }

    let parameters = ["password", "username"]

    console.log(user)
    
    let emptyParameters = findEmptyParameters(parameters, user)
    console.log(emptyParameters)
    
    if(!checkIfEmpty(emptyParameters)){
        validateHelper.setError(CustomErrorBuilder
            .setMessage("Missing Login arguments")
            .setField(emptyParameters)
            .setStatus(400)
            .build());
        return validateHelper
    }

    return validateHelper

}

export {validateLogin};