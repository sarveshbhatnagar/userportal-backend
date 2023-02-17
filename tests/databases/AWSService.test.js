import {AWSProvider} from '../../repository/providers/awsProvider';
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
      

});
