import {UserBuilder} from "../../models/user";




describe('User Module', () => {
    test("Should throw an error if UserModel is not properly created", () => {
        const invalidUser = new UserBuilder()

        expect(() => invalidUser.build()).toThrow('username is missing');
    })
    test("Should return a user", () => {
        const user = "pratyash"
        const validUser = new UserBuilder(user)
        
        expect(validUser.build().username).toEqual(user);
    })
});

