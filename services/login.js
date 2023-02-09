import { buildResponse } from '../utils/utils';
import AWS from 'aws-sdk';
import { validateLogin } from '../validators/loginValidator';

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

export {login};

