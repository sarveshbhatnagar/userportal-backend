import {EmployeeTable} from '../../repository/tables/employeeTable';
import sinon from 'sinon';
import {expect} from 'chai';
import { AWSProvider } from '../../repository/providers/awsProvider';
import { afterEach, beforeEach } from 'node:test';
import { DATABASE } from '../../utils/constants';

// const fakeDatabase = sinon.stub(AWSProvider, 'get')

// fakeDatabase.withArgs({Key: {id: '123'}, tableName: 'st-employee'}).returns({
//     Item: {id: '123', name: 'John Doe'}
// });

// fakeDatabase.withArgs({Key: {id: '234'}, tableName: 'st-employee'}).returns({});

// const dynamoDbMock = {
//     get: fakeDatabase
// };


describe('EmployeeTable', () => {
    let getStub;

    it('should get an employee', async () => {
        getStub = sinon.stub(DATABASE, 'get');
        const expectedParams = {
            Key: {id: '123'},
            TableName: 'st-employee'
        }

        getStub.withArgs(expectedParams).returns({
            Item: {id: '123', name: 'John Doe'}
        });

        const employee = await EmployeeTable.getEmployee('123');

        expect(employee).to.eql({id: '123', name: 'John Doe'});
        getStub.restore();
    });

    it('should return error response on miss for an employee', async () => {
        getStub = sinon.stub(DATABASE, 'get');
        const expectedParams = {
            Key: {id: '234'},
            TableName: 'st-employee'
        }

        getStub.withArgs(expectedParams).returns({});

        const employee = await EmployeeTable.getEmployee('234');

        expect(employee).to.eql(undefined);
        getStub.restore();
    });
});