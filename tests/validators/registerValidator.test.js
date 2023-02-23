import {validateRegistration} from "../../validators/registerValidator";
import {UserBuilder} from "../../models/user";
import { ValidateHelper } from "../../utils/validateHelper";
import {areObjectsEqual} from "../../utils/utils";
import {expect, jest, test} from '@jest/globals';

const validUser = new UserBuilder("abc")
    .setEmail("abc@gasdfn")
    .setName("abc")
    .setPassword("00000000")
    .setIsActive(true)
    .setIsManager(false)
    .setManagerHash("yes")
    .build();


describe('registerValidators Module', () => {
    test("Should return default ValidateHelper", () => {
        const response = validateRegistration(validUser);
        const expectedResponse  = new ValidateHelper();
        expect(areObjectsEqual(response, expectedResponse)).toBe(true);    
    })

});