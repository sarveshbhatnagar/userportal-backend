import {EmployeeTable} from '../../../repository/tables/employeeTable';
import sinon from 'sinon';
import {expect} from 'chai';
import { DATABASE } from '../../../utils/constants';
import { UserBuilder} from '../../../models/user';




describe('EmployeeTableGetOperation', () => {
    let getStub;
    
    beforeEach(() => {
        getStub = sinon.stub(DATABASE, 'get');
    });

    afterEach(() => {
        getStub.restore();
    });

    it('should get an employee', async () => {
        
        const expectedParams = {
            Key: {username: '123'},
            TableName: 'st-employee'
        }

        getStub.withArgs(expectedParams).returns({
            Item: {username: '123', name: 'John Doe'}
        });

        const employee = await EmployeeTable.getEmployee('123');

        expect(employee).to.eql({username: '123', name: 'John Doe'});
    });

    it('should return error response on miss for an employee', async () => {
        const expectedParams = {
            Key: {username: '234'},
            TableName: 'st-employee'
        }

        getStub.withArgs(expectedParams).returns({});

        const employee = await EmployeeTable.getEmployee('234');

        expect(employee).to.eql(undefined);
    });

    
});

describe('EmployteeTablePutOperation', () => {
    let putStub;

    beforeEach(() => {
        putStub = sinon.stub(DATABASE, 'put');
    })

    afterEach(() => {
        putStub.restore();
    });

    it('should put an employee', async () => {
        const employee = new UserBuilder('123')
            .setEmail("abc@gasdfn")
            .setName("abc")
            .setPassword("00000000")
            .setIsActive(true)
            .setIsManager(false)
            .setManagerHash("yes").build()
        const expectedParams = {
            Item: employee,
            TableName: 'st-employee'
        }

        putStub.withArgs(expectedParams).returns(true);

        const result = await EmployeeTable.putEmployee(employee);
        expect(result).to.eql(true);
    });

})


describe('EmployeeTableUpdateOperation', () => {
    let updateStub;

    beforeEach(() => {
        updateStub =  sinon.stub(DATABASE, 'update');
    })

    afterEach(() => {
        updateStub.restore();
    });

    it('should update an employee', async () => {
        const employee = new UserBuilder('123')
            .setEmail("abc@gasdfn")
            .setName("abc")
            .setPassword("00000000")
            .setIsActive(true)
            .setIsManager(false)
            .setManagerHash("yes").build()

        const expectedParams = {
            TableName: 'st-employee',
            Key: { username: employee.username},
            UpdateExpression: 'SET #attrName = :attrValue',
            ExpressionAttributeName: {
                '#attrName' : 'isActive'
            },
            ExpressionAttributeValue: {
                ':attrValue': employee.isActive
            }
        }
        console.log(expectedParams)

        updateStub.withArgs(expectedParams).returns(true);

        const result = await EmployeeTable.updateActiveStatus(employee, employee.isActive)
        expect(result).to.eql(true);

    });
})