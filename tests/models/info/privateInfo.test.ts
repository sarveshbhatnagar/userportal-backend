import { PrivateInfoBuilder } from "../../../models/info/privateInfo";

describe("PrivateInfo", () => {
    it("should have a valid constructor", () => {
        const privateInfo = new PrivateInfoBuilder()
            .withPassword("1234")
            .build();
        expect(privateInfo.password).toBe("1234");
    });
});