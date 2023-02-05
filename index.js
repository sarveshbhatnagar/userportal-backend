const createUserPath = '/createuser';
const registerPath = '/register';
const loginPath = '/login';
const deleteUserPath = '/deleteuser';
const transferUser = '/transferuser';

export const handler = async(event) => {
    console.log('Request Event : ', event);
    let response;
    switch(true) {
        case event.httpMethod === "POST" && event.path === registerPath:
            response = buildResponse(200);
            break;
        case event.httpMethod === "POST" && event.path === createUserPath:
            response = buildResponse(200);
            break;
        case event.httpMethod === "POST" && event.path === loginPath:
            response = buildResponse(200);
            break;
        case event.httpMethod === "POST" && event.path === deleteUserPath:
            response = buildResponse(200);
            break;
        case event.httpMethod === "POST" && event.path === transferUser:
            response = buildResponse(200);
            break;
        default:
            response = buildResponse(404, "404 Path Not Found!");
    }
}

function buildResponse(statusCode, body){
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