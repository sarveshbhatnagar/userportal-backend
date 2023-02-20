import { CustomErrorBuilder } from "../utils/customError";
import { ValidateHelper} from "../utils/validateHelper";
import { isCharacterALetter, findEmptyParameters, checkIfEmpty } from "../utils/utils";
import AWS from 'aws-sdk'



const dynamodb = new AWS.DynamoDB.DocumentClient();
AWS.config.update({region: 'us-west-2'});




function validateRegistration(user){

    let validateHelper = new ValidateHelper();
    if(!user){
        validateHelper.setError(CustomErrorBuilder
                    .setMessage("No user provided")
                    .setStatus(400)
                    .build());

        return validateHelper;

    }

    let parameters = ["password", "email", "username", "isManager", "isActive", "managerHash", "name"]
    
    let emptyParameters = findEmptyParameters(parameters, user)
    
    if(!checkIfEmpty(emptyParameters)){
        validateHelper.setError(CustomErrorBuilder
            .setMessage("Missing Registration arguments")
            .setField(emptyParameters)
            .setStatus(400)
            .build());
        return validateHelper
    }
    return validateHelper
}

export {validateRegistration};

// todo: create  test for validRegistration
