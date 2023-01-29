const healthPath = '/health';
const createUserPath = '/createUser';
const registerPath = '/registerPath';
const loginPath = '/login';
const verifyPath = '/verify';

exports.handler = async(event) => {
    console.log('Request Event : ', event);
    let response;
    switch(true) {
        case event.httpMethod === "GET" && event.path === healthPath:
            response = buildResponse(200);
            break;
        case event.httpMethod === "POST" && event.path === registerPath:
            response = buildResponse(200);
            break;
        case event.httpMethod === "POST" && event.path === createUserPath:
            response = buildResponse(200);
            break;
        case event.httpMethod === "POST" && event.path === loginPath:
            response = buildResponse(200);
            break;
        case event.httpMethod === "POST" && event.path === verifyPath:
            response = buildResponse(200);
            break;
        default:
            response = buildResponse(404, "404 Path Not Found!");
    }
}

function buildResponse(statusCode, body){
    return {
        statusCode: statusCode,
        headers:{
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }
}