import {EmployeeTable} from '../../repository/tables/employeeTable';
import sinon from 'sinon';
import {expect} from 'chai';
import { AWSProvider } from '../../repository/providers/awsProvider';

const dynamoDbMock = {
    get: sinon.stub(AWSProvider, 'get').returns({
            Item: {id: '123', name: 'John Doe'}
        })
};



describe('EmployeeTable', () => {
    it('should get an employee', async () => {
        const employee = await EmployeeTable.getEmployee('123');

        // Checking proper input.
        sinon.assert.calledOnce(dynamoDbMock.get);
        sinon.assert.calledWith(dynamoDbMock.get, {
            Key: {id: '123'},
            tableName: 'st-employee'
        });

        // Checking proper result.
        console.log(employee);
        expect(employee).to.eql({id: '123', name: 'John Doe'});
    });
});