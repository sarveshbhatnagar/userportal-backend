import { PersonalInfoBuilder } from "../../../models/info/personalInfo";

describe("PersonalInfo", () => {
    it("should have a valid constructor", () => {
        const personalInfo = new PersonalInfoBuilder()
            .withAddress("1234 Main St")
            .withCity("Anytown")
            .withState("CA")
            .withMobile("555-555-5555")
            .withEmail("ssd")
            .build();
        expect(personalInfo.address).toBe("1234 Main St");
        expect(personalInfo.city).toBe("Anytown");
        expect(personalInfo.state).toBe("CA");
        expect(personalInfo.mobile).toBe("555-555-5555");
        expect(personalInfo.email).toBe("ssd");
    });
});