import {AuthenticationParameters, RegisterValidator} from "../../validators/authenticationValidator"
import {UserBuilder} from "../../models/user/user";
import { ValidateHelper } from "../../utils/validateHelper";
import {areObjectsEqual} from "../../utils/utils";
import {expect, test} from '@jest/globals';

const validUser = new UserBuilder("abc")
    .withEmail("abc@gasdfn")
    .withFullName("abc")
    .withPassword("00000000")
    .withIsActive(true)
    .withIsManager(false)
    .withTeamName("yes")
    .build();


describe('AuthenticationValidator Module', () => {
    test("Should return default ValidateHelper", () => {
        const response = RegisterValidator.validateRequest(validUser);
        const expectedResponse  = new ValidateHelper();
        expect(areObjectsEqual(response, expectedResponse)).toBe(true);    
    });

    test("Has proper login parameters", () => {
        const loginParameters = ["username", "password"];
        expect(AuthenticationParameters.LOGIN).toEqual(loginParameters);
    });

    test("Has proper register parameters", () => {
        const registerParameters = ["password", "email", "username", "isManager", "isActive", "teamName", "fullName"];
        expect(AuthenticationParameters.REGISTER).toEqual(registerParameters);
    });

});