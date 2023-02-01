const utils = require('./utils/utils');
const createUserPath = '/createUser';
const registerPath = '/register';
const loginPath = '/login';
const deleteUserPath = '/deleteUser';
const transferUser = '/transferUser';

exports.handler = async(event) => {
    console.log('Request Event : ', event);
    let response;
    switch(true) {
        case event.httpMethod === "POST" && event.path === registerPath:
            response = utils.buildResponse(200);
            break;
        case event.httpMethod === "POST" && event.path === createUserPath:
            response = utils.buildResponse(200);
            break;
        case event.httpMethod === "POST" && event.path === loginPath:
            response = utils.buildResponse(200);
            break;
        case event.httpMethod === "POST" && event.path === deleteUserPath:
            response = utils.buildResponse(200);
            break;
        case event.httpMethod === "POST" && event.path === transferUser:
            response = utils.buildResponse(200);
            break;
        default:
            response = utils.buildResponse(404, "404 Path Not Found!");
    }
}

