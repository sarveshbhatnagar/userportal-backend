import {buildResponse} from '../../utils/utils';
import {Authentication} from '../../services/authentication';
import { DATABASE, Messages } from '../../utils/constants';
import { UserBuilder } from '../../models/user';
import sinon from 'sinon';
import { LoginValidator } from '../../validators/authenticationValidator';
import { EmployeeTable } from '../../repository/tables/employeeTable';
import bcrypt from 'bcryptjs/dist/bcrypt';
import { CustomErrorBuilder } from '../../utils/customError';




const username = "testuser";
const password = "testpassword";
const email = "testemail";
const name = "testname";
const isManager = false;
const isActive = true;
const teamName = "testteamName";
const teamName = "testteamName";

const userWithMissingName = new UserBuilder(username)
                        .withEmail(email)
                        .withPassword(password)
                        .withIsActive(isActive)
                        .withIsManager(isManager)
                        .withTeamName(teamName);

const completeUser = new UserBuilder(username)
                        .withEmail(email)
                        .withPassword(password)
                        .withIsActive(isActive)
                        .withIsManager(isManager)
                        .withTeamName(teamName)
                        .withName(name);





describe('Authentication : Login Module', () => {
    const sandbox = sinon.createSandbox();

    const user = new UserBuilder(username).setPassword(password).build();

    const mockEmployee = {
        username: 'testuser',
        password: bcrypt.hashSync(password, 10)
    };

    afterEach(() => {
        sandbox.restore();
    });

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

    it('should return a success response if the username and password are correct', async () => {
        sandbox.stub(LoginValidator, 'validateRequest').returns({ error: false });
        sandbox.stub(EmployeeTable, 'getEmployee').resolves(mockEmployee);
        const result = await Authentication.login(completeUser.build())
        sinon.assert.calledOnce(LoginValidator.validateRequest);
        sinon.assert.calledOnce(EmployeeTable.getEmployee);
        expect(result).toEqual(buildResponse(200, {message: "Login successful", token: "token"}));
    });

    it('should return error response if the username returned is undefined', async () => {
        sandbox.stub(LoginValidator, 'validateRequest').returns({ error: false });
        sandbox.stub(EmployeeTable, 'getEmployee').resolves({});
        const result = await Authentication.login(completeUser.build())
        sinon.assert.calledOnce(LoginValidator.validateRequest);
        sinon.assert.calledOnce(EmployeeTable.getEmployee);
        expect(result).toEqual(CustomErrorBuilder.setMessage(Messages.INVALIDCREDENTIALS)
                                                .setStatus(400)
                                                .setField("username")
                                                .build().createResponse());    

    });


    it('should return error response if the password is incorrect', async () => {
        sandbox.stub(LoginValidator, 'validateRequest').returns({ error: false });
        sandbox.stub(EmployeeTable, 'getEmployee').resolves({username: 'testuser', password: 'correctpassword'});
        const result = await Authentication.login(completeUser.build())
        sinon.assert.calledOnce(LoginValidator.validateRequest);
        sinon.assert.calledOnce(EmployeeTable.getEmployee);
        expect(result).toEqual(CustomErrorBuilder.setMessage(Messages.INVALIDCREDENTIALS)
                                                .setStatus(400)
                                                .setField("password")
                                                .build().createResponse());    

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

