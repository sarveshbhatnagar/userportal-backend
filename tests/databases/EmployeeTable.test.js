import {EmployeeTable} from '../../repository/tables/employeeTable';
import sinon from 'sinon';
import {expect} from 'chai';

const dynamoDbMock = {
    get: sinon.stub().returns({
        promise: () => Promise.resolve({
            Item: {id: '123', name: 'John Doe'}
        })
    })
};



describe('EmployeeTable', () => {
    it('should get an employee', async () => {
        const employee = await EmployeeTable.getEmployee('123', dynamoDbMock);

        // Checking proper input.
        sinon.assert.calledOnce(dynamoDbMock.get);
        sinon.assert.calledWith(dynamoDbMock.get, {
            Key: {id: '123'},
            tableName: 'st-employee'
        });

        // Checking proper result.
        expect(employee).to.eql({id: '123', name: 'John Doe'});
    });
});