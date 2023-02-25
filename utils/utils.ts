import { User } from "../models/user/user";
import { validateResponse } from "../validators/utilsValidator"
import { ValidateHelper } from "./validateHelper";

function buildResponse(statusCode: number, body: any){
    if(!validateResponse(statusCode, body)){
        throw new Error("Build Response parameters are invalid" + statusCode + body);
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

function checkIfEmpty(val: string | null | undefined){
    return val === null || val === "" || val === undefined;
}

function isCharacterALetter(char: string) {
    if(checkIfEmpty(char)){
        return false;
    }
    return (/[a-zA-Z]/).test(char)
  }

function findEmptyParameters(parameters: string[], object: User){
    let emptyParameters = ""
    for(var indx in parameters){
        if(checkIfEmpty(object[parameters[indx]])){
            emptyParameters += parameters[indx]
            emptyParameters += ","
        }
    }
    return emptyParameters
}

function areObjectsEqual(obj1: any, obj2: any) {
    if (obj1 === null && obj2 === null || obj1 === undefined && obj2 === undefined) {
        return true;
    }

    if (checkIfEmpty(obj1) || checkIfEmpty(obj2)) {
        return false;
    }

    const obj1Properties = Object.getOwnPropertyNames(obj1);
    const obj2Properties = Object.getOwnPropertyNames(obj2);
  
    if (obj1Properties.length !== obj2Properties.length) {
      return false;
    }
  
    for (let i = 0; i < obj1Properties.length; i++) {
      const propertyName = obj1Properties[i];
      if (obj1[propertyName] !== obj2[propertyName]) {
        return false;
      }
    }
  
    return true;
  }

  export {areObjectsEqual, findEmptyParameters, checkIfEmpty, buildResponse, isCharacterALetter};

  // hiring & permission portal and transfer portal