import {EmployeeTable} from '../../../repository/tables/employeeTable';
import sinon from 'sinon';
import {expect} from 'chai';
import { DATABASE, Tables } from '../../../utils/constants';
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
            .withEmail("abc@gasdfn")
            .withName("abc")
            .withPassword("00000000")
            .withIsActive(true)
            .withIsManager(false)
            .withTeamName("yes").build()
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
            .withEmail("abc@gasdfn")
            .withName("abc")
            .withPassword("00000000")
            .withIsActive(true)
            .withIsManager(false)
            .withTeamName("yes").build()

        const expectedParams = {
            TableName: Tables.EMPLOYEE,
            Key: { username: employee.username },
            UpdateExpression: 'SET #attrName = :attrValue',
            ExpressionAttributeNames: { '#attrName': 'isActive' },
            ExpressionAttributeValues: { ':attrValue': !employee.isActive }
        }

        updateStub.withArgs(expectedParams).returns(true);

        const result = await EmployeeTable.updateActiveStatus(employee, !employee.isActive)
        expect(result).to.eql(true);

    });
})