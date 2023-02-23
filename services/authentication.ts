// create a class for authentication containing functions like login, register, forgot password, etc.
import { buildResponse } from '../utils/utils';
// import { validateRegistration } from '../validators/registerValidator';
import { RegisterValidator, LoginValidator } from '../validators/authenticationValidator';
import { User } from '../models/user';
import { EmployeeTable } from '../repository/tables/employeeTable';
import { CustomErrorBuilder } from '../utils/customError';
import { Messages } from '../utils/constants';
import bcrypt from 'bcryptjs/dist/bcrypt';


class Authentication {

    static async login(user: User){
        const validationResult = LoginValidator.validateRequest(user);
        if(validationResult.error){
            return validationResult.getErrorResponse();
        }
        let remoteUser = await EmployeeTable.getEmployee(user.username);
        if(!remoteUser){
            return CustomErrorBuilder.setMessage(Messages.INVALIDCREDENTIALS).setStatus(400).setField("username").build();
        }
        if(!bcrypt.compareSync(user.password, remoteUser.password)){
            return CustomErrorBuilder.setMessage(Messages.INVALIDCREDENTIALS).setStatus(400).setField("password").build();
        }

        return buildResponse(200, {message: "Login successful", token: "token"});
    }

    static async register(user: User){
        const validationResult = RegisterValidator.validateRequest(user);
        if(validationResult.error){
            return validationResult.getErrorResponse();
        }
        return buildResponse(200, {message: "Register Successfull"})
    }

}

export {Authentication};