// const AWS = require('aws-sdk');
// AWS.config.update({
//     region: 'us-east-1'
// })

import { isCharacterALetter } from "../utils/utils";
import { buildResponse } from "../utils/utils";


const AWS  = require('./constants')
const utils = require('../utils/utils')
const bcrypt = require('bcryptjs')

const dynamodb = new AWS.DynamoDB.DocumentClient();
const userTable = 'jinemister-users';


// Register class startes here
class register{

    constructor(name, email, username, is_manager, is_active, manager_hash, password){
        this.name = name;
        this.username = username;
        this.email= email;
        this.is_manager = is_manager;
        this.is_active = is_active;
        this.manager_hash = manager_hash;
        this.password = password;
    }

    checkEmpty(username, name, email, password){
        if (!username || !name || !email || !password) {
            return buildResponse(401, {
                message: 'All fields are required'
            })
        }  
    }

    matchUsername(dynamoUser){
        if (dynamoUser && dynamoUser.username) {
            return buildResponse(401, {
                message: '${this.username} username already exits in our database. Please choose a different username'
            })
        }
    }

    checkusername(validuser){
        if (validuser){
            return buildResponse(401, {
                message: errorup
            })
        }
    }

    password(encryptedPassword){
        const user ={
            name: name,
            email: email,
            username: username.toLowerCase().trim(),
            password: encryptedPassword
        }
    }

    saveUserResp(saveUserResponse){
        if (!saveUserResponse) {
            return buildResponse(503, {message: 'Server Error. Please try again later.'});
        }
    
        return buildResponse(200, {username: username});
    }
}

// Register class ends here

// calling Register class functions starts here
const password = userinfo.password;
console.log(checkEmpty(password));

const dynamoUser = await getUser(username.toLowerCase().trim());
console.log(matchUsername(dynamoUser));

const validuser = await validUser(username.toLowerCase.trim());
console.log(checkusername(validuser));

const encryptedPassword = bcrypt.hashSync(password.trim(), 10);
password(encryptedPassword);

const saveUserResponse = await saveUser(user);
console.log(saveUserResp(saveUserResponse));

//  calling Register class function completes here

// Pervious Register function starts here

"to get the pervious code go to dump.js and"

// Pervious Register function ends here.


async function getUser(username){
    const params = {
        TableName: userTable,
        Key: {
            username: username
        }
    }

    return await dynamodb.get(params).promise().then(response => {
        return response.Item;
    }, error =>{
        console.error("There is an error getting user: ", error);
    })
}

async function saveUser(user){
    const params = {
        TableName: userTable,
        Item: user
    }
    return await dynamodb.put(params).promise().then(() => {
        return true;
    }, error =>{
        console.error('There is an error saving user: ', error)
    })
}


async function validUser(user){  //here how to use user (bug) 
    if (!len(username) >= 4 && !isCharacterALetter(username[0])){
        throw errorup
    }
        
}
module.exports.register = register;