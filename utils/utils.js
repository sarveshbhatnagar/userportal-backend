import { validateResponse } from "../validators/utilsValidator"

function buildResponse(statusCode, body){
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


function isCharacterALetter(char) {
    return (/[a-zA-Z]/).test(char)
  }

function checkIfEmpty(val){
    return val === null || val === "" || val === undefined;
}

function findEmptyParameters(parameters, object){
    console.log("findEmptyParameters")
    console.log(parameters)
    let emptyParameters = ""
    for(var indx in parameters){
        if(checkIfEmpty(object[parameters[indx]])){
            emptyParameters += parameters[indx]
            emptyParameters += ","
        }
    }
    return emptyParameters
}

function areObjectsEqual(obj1, obj2) {
    if (obj1 === null && obj2 === null || obj1 === undefined && obj2 === undefined) {
        return true;
    }

    if (obj1 === null || obj2 === null || obj1 === undefined || obj2 === undefined) {
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