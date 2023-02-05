// const AWS = require('aws-sdk');
// AWS.config.update({
//     region: 'us-east-1'
// })
const AWS  = require('./constants')
const utils = require('../utils/utils')
const bcrypt = require('bcryptjs')

const dynamodb = new AWS.DynamoDB.DocumentClient();
const userTable = 'jinemister-users';

async function register(userInfo) {
    const name = userinfo.name;
    const email = userinfo.email;
    const username = userinfo.username;
    // correct schema starts here
    const is_manager = userinfo.is_manager;
    const is_active =userinfo.is_active;
    const manager_hash = userinfo.manager_hash; //default superuser
    // correct schema ends here]
    // TODO: have to create a dynamoDB entry for this updated schema
    const password = userinfo.password;
    if (!username || !name || !email || !password) {
        return utils.buildResponse(401, {
            message: 'All fields are required'
        })
    }



    const dynamoUser = await getuser(username.toLowerCase().trim());
    if (dynamoUser && dynamoUser.username) {
        return utils.buildResponse(401, {
            message: username+'username already exits in our database. Please choose a different username'
        })
    }


    const encryptedPW = bcrypt.hashSync(password.trim(), 10);
    const user ={
        name: name,
        email: email,
        username: username.toLowerCase().trim(),
        password: encryptedPassword
    }

    const saveUserResponse = await saveUser(user);
    if (!saveUserResponse) {
        return utils.buildResponse(503, {message: 'Server Error. Please try again later.'});
    }

    return utils.buildResponse(200, {username: username});
}


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

module.exports.register = register;