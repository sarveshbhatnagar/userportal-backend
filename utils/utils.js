import { validateResponse } from "../validators/utilsValidator"

export function buildResponse(statusCode, body){
    if(!validateResponse(statusCode, body)){
        throw new Error("Build Response parameters are invalid", statusCode, body);
    }

    return {
        isBase64Encoded: false,
        statusCode: statusCode,
        headers:{
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }
}


export function isCharacterALetter(char) {
    return (/[a-zA-Z]/).test(char)
  }