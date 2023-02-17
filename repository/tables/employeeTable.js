import {DATABASE} from "../../utils/constants";
import {Tables} from "../../utils/constants"

class EmployeeTable {    

    static async getEmployee(id) {

        const params = {
            tableName: Tables.EMPLOYEE,
            Key: { id }
        };

        const result = await DATABASE.get(params);

        return result.Item;
    }
}



export { EmployeeTable };