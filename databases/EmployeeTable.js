import {AWSService} from "./AWSService";

database = AWSService

class Tables {
    static EMPLOYEE = 'st-employee';
    static PERMISSION = 'st-permission';
}

class EmployeeTable {    

    static async getEmployee(id, database) {

        const params = {
            tableName: Tables.EMPLOYEE,
            Key: { id }
        };

        const result = await database.get(params);

        return result.Item;
    }
}



export { EmployeeTable };