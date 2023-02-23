import {buildResponse} from '../../utils/utils';
import {Authentication} from '../../services/authentication';
import { Messages } from '../../utils/constants';
import { UserBuilder } from '../../models/user';



const username = "testuser";
const password = "testpassword";
const email = "testemail";
const name = "testname";
const isManager = false;
const isActive = true;
const managerHash = "testmanagerhash";

const userWithMissingName = new UserBuilder(username)
                        .setEmail(email)
                        .setPassword(password)
                        .setIsActive(isActive)
                        .setIsManager(isManager)
                        .setManagerHash(managerHash);

const completeUser = new UserBuilder(username)
                        .setEmail(email)
                        .setPassword(password)
                        .setIsActive(isActive)
                        .setIsManager(isManager)
                        .setManagerHash(managerHash)
                        .setName(name);





describe('Authentication : Login Module', () => {

    test('Should return a 400 error if no user is provided', async () => {
        const response = await Authentication.login();
        expect(response).toEqual(buildResponse(400, {message: "No user provided"}));
    });
    
    test('Missing username', async () => {
        const response = await Authentication.login({password: password});
        expect(response).toEqual(buildResponse(400, {message: Messages.MISSINGARGUMENTS, field: "username,"}));
    });
    
    test('Missing password', async () => {
        const response = await Authentication.login({username: username});
        expect(response).toEqual(buildResponse(400, {message: Messages.MISSINGARGUMENTS, field: "password,"}));
    });

    test('Should return a 200 if user is valid', async () => {
        const response = await Authentication.login({username: username, password: password});
        expect(response).toEqual(buildResponse(200, {message: "Login successful"}));
    });
    
});


describe('Authentication : Register Module', () => {
    
        test('Should return a 400 error if no user is provided', async () => {
            const response = await Authentication.register();
            expect(response).toEqual(buildResponse(400, {message: "No user provided", field: ""}));
        });
        
        test('Missing Name in user', async () => {
            const response = await Authentication.register(userWithMissingName.build());
            expect(response).toEqual(buildResponse(400, {message: Messages.MISSINGARGUMENTS, field: "name,"}));
        });
    
        test('Should return a 200 if user is valid', async () => {
            const response = await Authentication.register(completeUser.build());
            expect(response).toEqual(buildResponse(200, {message: "Register Successfull"}));
        });
        
});



