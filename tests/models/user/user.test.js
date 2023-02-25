import {UserBuilder} from "../../../models/user/user";




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

describe('User Module: Working with names', () => {
    it('User without fullName should have firstName and lastName undefined', () => {
        const validUser = new UserBuilder("pratyash")

        expect(validUser.build().firstName).toEqual(undefined);
        expect(validUser.build().lastName).toEqual(undefined);
    })
});

