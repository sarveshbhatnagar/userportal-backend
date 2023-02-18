import {EmployeeTable} from '../../repository/tables/employeeTable';
import sinon from 'sinon';
import {expect} from 'chai';
import { DATABASE } from '../../utils/constants';


describe('EmployeeTable', () => {
    let getStub;
    
    beforeEach(() => {
        getStub = sinon.stub(DATABASE, 'get');
    });

    afterEach(() => {
        getStub.restore();
    });

    it('should get an employee', async () => {
        
        const expectedParams = {
            Key: {id: '123'},
            TableName: 'st-employee'
        }

        getStub.withArgs(expectedParams).returns({
            Item: {id: '123', name: 'John Doe'}
        });

        const employee = await EmployeeTable.getEmployee('123');

        expect(employee).to.eql({id: '123', name: 'John Doe'});
    });

    it('should return error response on miss for an employee', async () => {
        const expectedParams = {
            Key: {id: '234'},
            TableName: 'st-employee'
        }

        getStub.withArgs(expectedParams).returns({});

        const employee = await EmployeeTable.getEmployee('234');

        expect(employee).to.eql(undefined);
    });
});