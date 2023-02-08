import { buildResponse } from '../utils/utils';
import AWS from 'aws-sdk';
import { ValidateHelper } from '../utils/validateHelper';
import { CustomErrorBuilder } from '../utils/customError';
import { validateLoginUsername } from '../validators/username';
import { validateLoginPassword } from '../validators/password';

AWS.config.update({region: 'us-west-2'});

// TODO: Move this to a config file, or environment variable.
// Will be used to create a token for the user, later.
const dynamodb = new AWS.DynamoDB.DocumentClient();
const employeeTable = "st-employee";

async function login(user){
    const validationResult = validateLogin(user);

    if(validationResult.error){
        return validationResult.getErrorResponse();
    }
    // TODO get user from database
    // TODO compare password
    // TODO return token with response.
    return buildResponse(200, {message: "Login successful"});

}

function validateLogin(user){
    let validateHelper = new ValidateHelper();
    if(!user){
        validateHelper.setError(CustomErrorBuilder
                    .setMessage("No user provided")
                    .setStatus(400)
                    .build());

        return validateHelper;

    }

    const username = user.username;
    const password = user.password;


    // Reasoning behind creating this method is to allow maintainability
    // and readability. If we were to make changes, or reuse, we can do so.
    if(!validateLoginUsername(username)){
        validateHelper.setError(CustomErrorBuilder
            .setMessage("Missing username")
            .setField("username")
            .setStatus(400).build());
        return validateHelper;
    }
    
    if(!validateLoginPassword(password)){
        validateHelper.setError(CustomErrorBuilder
            .setMessage("Missing password")
            .setField("password")
            .setStatus(400).build());
        return validateHelper;
    }

    return validateHelper;

}

export {login};

