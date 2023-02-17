import { AWSService } from "../../repository/services/awsService";
import sinon from 'sinon';
import AWS from 'aws-sdk';
import { expect } from 'chai';

describe('AWSService', () => {
    describe('getInstance', () => {
        afterEach(() => {
            AWSService.dynamoDb = null;
        });

        it('should create a new DocumentClient if none exists', () => {
            const spy = sinon.spy(AWS.DynamoDB, 'DocumentClient');

            const instance = AWSService.getInstance();

            expect(spy.calledOnce).to.be.true;
            expect(instance).to.be.an.instanceOf(AWS.DynamoDB.DocumentClient);
        });

        it('should return an existing DocumentClient', () => {
            const client = new AWS.DynamoDB.DocumentClient();
            AWSService.dynamoDb = client;

            const instance = AWSService.getInstance();

            expect(instance).to.equal(client);
        });
    });
      

});
