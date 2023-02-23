import { User } from "../../models/user";
import {DATABASE} from "../../utils/constants";
import {Tables} from "../../utils/constants"

class EmployeeTable {    

    static async getEmployee(id: string) {
        // TODO: Create unified parameters 
        const params = {
            TableName: Tables.EMPLOYEE,
            Key: { username: id }
        };

        const result = await DATABASE.get(params);
        // TODO: Return unified result
        return result?.Item;

    }
    static async putEmployee(employee: User) {
        const params = {
            TableName: Tables.EMPLOYEE,
            Item: employee
        };

        let result = await DATABASE.put(params);
        return result;
    }
    static async updateActiveStatus(employee: User, isActive: boolean) {
        const params = {
            TableName: Tables.EMPLOYEE,
            Key: { username: employee.username },
            UpdateExpression: 'SET #attrName = :attrValue',
            ExpressionAttributeNames: {
                '#attrName': 'isActive'
            },
            ExpressionAttributeValues: {
                ':attrValue': isActive
            }
        }
        
        let result = await DATABASE.update(params);
        return result;
    }
}



export { EmployeeTable };