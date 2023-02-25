import { EmploymentInfoBuilder } from "../../../models/info/employmentInfo";

describe("EmploymentInfo", () => {
    it("should have a valid constructor", () => {
        const employmentInfo = new EmploymentInfoBuilder("Team 1")
            .withIsManager(true)
            .withIsActive(true)
            .build();
        expect(employmentInfo.teamName).toBe("Team 1");
        expect(employmentInfo.isManager).toBe(true);
        expect(employmentInfo.isActive).toBe(true);
    });
});