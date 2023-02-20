import {AWSProvider} from '../../../repository/providers/awsProvider';
import sinon from 'sinon';
import AWS from 'aws-sdk';
import { expect } from 'chai';

describe('AWSProvider', () => {
    describe('getInstance', () => {
        afterEach(() => {
            AWSProvider.dynamoDb = null;
        });

        it('should create a new DocumentClient if none exists', () => {
            const spy = sinon.spy(AWS.DynamoDB, 'DocumentClient');

            const instance = AWSProvider.getInstance();

            expect(spy.calledOnce).to.be.true;
            expect(instance).to.be.an.instanceOf(AWS.DynamoDB.DocumentClient);
        });

        it('should return an existing DocumentClient', () => {
            const client = new AWS.DynamoDB.DocumentClient();
            AWSProvider.dynamoDb = client;

            const instance = AWSProvider.getInstance();

            expect(instance).to.equal(client);
        });
    });


    describe('get', () => {
        let getStub;

        beforeEach(() => {
            AWSProvider.dynamoDb = new AWS.DynamoDB.DocumentClient();
            getStub = sinon.stub(AWSProvider.dynamoDb, 'get');
            
        });

        afterEach(() => {
            getStub.restore();
        });

        it('should get an item for get operation! e.g. {id:21, name:sksk}', async () => {
            const params = {
                Key: {id: '123'},
                TableName: 'st-employee'
            };

            const expectedResponse = {
                Item: {id: '123', name: 'John Doe'}
            };

            getStub.withArgs(params)
            .returns({
                promise: () => Promise.resolve(expectedResponse)
            });

            const item = await AWSProvider.get(params)
            .then((data) => data)
            .catch((err) => {
                console.log("Error getting data: ", err);
                throw err;
            });
            
            // It Returns the Item i.e. {id: '123', name: 'John Doe'}
            expect(item).to.eql(expectedResponse.Item);
        });

        it('should return error response on server rejection', async () => {
            const params = {
                Key: {id: '123'},
                TableName: 'st-employee'
            };

            getStub.withArgs(params)
            .returns({
                promise: () => Promise.reject(new Error('Server Error'))
            });

            const item = AWSProvider.get(params);
            let er;
            try {
                await item;
            } catch (error) {
                er = error;
                
            }

            expect(er).to.be.an.instanceOf(Error);
            expect(er.message).to.equal('Server Error');

    });
      
    });

    describe('put', () => {
        

    });
});
