// Target:
// this function will only contain one function which have only one task i.e. to 
// return response only.
// It will take more than one functions i.e. validate and register functions located in 
// other folder.


import { buildResponse } from "../utils/utils";
import AWS from 'aws-sdk'


AWS.config.update({region: 'us-west-2'});

const dynamodb = new AWS.DynamoDB.DocumentClient();
const userTable = 'st-employee'

async function register(user){
    const validationResult = validateRegister(user);

    if(validationResult.error){
        return validationResult.getErrorResponse();
    }
    return buildResponse(200, {message: "Register Successfull"})
}

export {register}