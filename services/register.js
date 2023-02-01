const AWS = require('aws-sdk');
AWS.config.update({
    region: 'us-east-1'
})
const utils = require('../utils/utils')
const bcrypt = require('bcryptjs')

const dynamodb = new AWS.DynamoDB.DocumentClient();
const userTable = 'jinemister-users';

async function register(userInfo) {
    const name = userInfo.name;
    const email = userinfo.email;
    const unsername = userinfo.username;
    const password = userinfo.password;
    if (!username || !name || !email || !password) {
        return utils.buildResponse(401, {
            message: 'All fields are required'
        })
    }



    const dynamoUser = await getuser(username.toLowerCase().trim());
    if (dynamoUser && dynamoUser.username) {
        return utils.buildResponse(401, {
            message: 'username already exits in our database. Please choose a different username'
        })
    }


    const encryptedPW = bcrypt.hashSync(password.trim(), 10);
    const user ={
        name: name,
        email: email,
        username: username.toLowerCase().trim(),
        password: encryptedPW
    }

    const saveUserResponse = await saveUser(user);
    if (!saveUserResponse) {
        return utils.buildResponse(503, {message: 'Server Error. Please try again later.'});
    }

    return utils.buildResponse(200, {username: username});
}

