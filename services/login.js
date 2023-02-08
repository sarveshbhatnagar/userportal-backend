import {builldResponse} from '../utils/responseBuilder';
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
    builldResponse(200, {message: "Login successful"});

}

async function validateLogin(user){
    const validateHelper = new ValidateHelper();
    if(!user){
        data = CustomErrorBuilder.message("Missing username or password")
                                .status(400)
                                .build();

        return validateHelper.setError(data);
    }

    const username = user.username;
    const password = user.password;


    // Reasoning behind creating this method is to allow maintainability
    // and readability. If we were to make changes, or reuse, we can do so.
    if(validateLoginUsername(username)){
        return validateHelper.setError(CustomErrorBuilder
            .message("Missing username")
            .field("username")
            .status(400).build());
    }
    
    if(validateLoginPassword(password)){
        return validateHelper.setError(CustomErrorBuilder
            .message("Missing password")
            .field("password")
            .status(400).build());
    }

}

