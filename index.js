import { buildResponse } from "./utils/utils";

const createUserPath = '/createuser';
const registerPath = '/register';
const loginPath = '/login';
const deleteUserPath = '/deleteuser';
const transferUser = '/transferuser';
const healthPath = '/health';


export const handler = async(event) => {
    console.log('Request Event : ', event);
    let response;
    switch(true) {
        case event.httpMethod === "GET" && event.path === healthPath:
            response = buildResponse(200, {"message": "Health check passed!"});
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
        case event.httpMethod === "POST" && event.path === deleteUserPath:
            response = buildResponse(200);
            break;
        case event.httpMethod === "POST" && event.path === transferUser:
            response = buildResponse(200);
            break;
        default:
            response = buildResponse(404, "404 Path Not Found!");
    }

    return response;
}
