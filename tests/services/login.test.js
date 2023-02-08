import {login} from '../../services/login';
import {buildResponse} from '../../utils/utils';


describe('Login Module', () => {

    test('Should return a 400 error if no user is provided', async () => {
        const response = await login();
        expect(response).toEqual(buildResponse(400, {message: "No user provided"}));
    });
    
    test('Missing username', async () => {
        const response = await login({password: "password"});
        expect(response).toEqual(buildResponse(400, {message: "Missing username", field: "username"}));
    });
    
    test('Missing password', async () => {
        const response = await login({username: "username"});
        expect(response).toEqual(buildResponse(400, {message: "Missing password", field: "password"}));
    });

    test('Should return a 200 if user is valid', async () => {
        const response = await login({username: "username", password: "password"});
        expect(response).toEqual(buildResponse(200, {message: "Login successful"}));
    });
    

});

