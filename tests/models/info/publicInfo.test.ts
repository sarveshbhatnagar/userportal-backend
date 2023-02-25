import { PublicInfoBuilder } from "../../../models/info/publicInfo";

describe("PublicInfo", () => {
    it("should have a valid constructor", () => {
        const publicInfo = new PublicInfoBuilder("username")
            .withFirstName("first")
            .withLastName("last")
            .build();
        expect(publicInfo.firstName).toBe("first");
        expect(publicInfo.lastName).toBe("last");
        expect(publicInfo.username).toBe("username");
        expect(publicInfo.fullName).toBe("last first");
    });

    it("should work with a null first name", () => {
        const publicInfo = new PublicInfoBuilder("username")
            .withLastName("last")
            .build();
        expect(publicInfo.firstName).toBe("");
        expect(publicInfo.lastName).toBe("last");
        expect(publicInfo.username).toBe("username");
        expect(publicInfo.fullName).toBe("last");
    });

    it("should work with a null last name", () => {
        const publicInfo = new PublicInfoBuilder("username")
            .withFirstName("first")
            .build();
        expect(publicInfo.firstName).toBe("first");
        expect(publicInfo.lastName).toBe("");
        expect(publicInfo.username).toBe("username");
        expect(publicInfo.fullName).toBe("first");
    });

    it("should work with a null first and last name", () => {
        const publicInfo = new PublicInfoBuilder("username")
            .build();
        expect(publicInfo.firstName).toBe("");
        expect(publicInfo.lastName).toBe("");
        expect(publicInfo.username).toBe("username");
        expect(publicInfo.fullName).toBe("");
    });

});


describe("PublicInfo createFullName", () => {
    it("should work with undefined first and last name", () => {
        const publicInfo = new PublicInfoBuilder("username")
            .build();
        expect(publicInfo.createFullName(undefined, undefined)).toBe("");
    });
});