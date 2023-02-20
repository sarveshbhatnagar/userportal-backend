import { isCharacterALetter } from "../utils/utils";
import { buildResponse } from "../utils/utils";


import AWS from 'aws-sdk'
const utils = require('../utils/utils')
const bcrypt = require('bcryptjs')

const dynamodb = new AWS.DynamoDB.DocumentClient();
const userTable = 'jinemister-users';


AWS.config.update({region: 'us-west-2'});

class Register{

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
        return user
    }

    saveUserResp(saveUserResponse){
        if (!saveUserResponse) {
            return buildResponse(503, {message: 'Server Error. Please try again later.'});
        }
    
        return buildResponse(200, {username: username});
    }
}


const password = userinfo.password;
console.log(checkEmpty(password));

const dynamoUser = await getUser(username.toLowerCase().trim());
console.log(matchUsername(dynamoUser));

const validuser = await validUser(username.toLowerCase.trim());
console.log(checkusername(validuser));

const encryptedPassword = bcrypt.hashSync(password.trim(), 10);
const user = password(encryptedPassword);

const saveUserResponse = await saveUser(user);
console.log(saveUserResp(saveUserResponse));



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

async function saveUser(user1){
    const params = {
        TableName: userTable,
        Item: user1
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



// validate --> all checks user, check if alreadyexists
// register --> save and all 
// return response.