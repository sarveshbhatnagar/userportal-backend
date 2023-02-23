
import { CustomErrorBuilder } from "../utils/customError";
import { ValidateHelper } from "../utils/validateHelper";
import { findEmptyParameters, checkIfEmpty } from "../utils/utils";
import { Messages } from "../utils/constants";


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

export {validateLogin};