import AWS from 'aws-sdk';
import {Database} from "./Database";

class AWSService extends Database {

    static setDynamoDb() {
        AWS.config.update({
            region: 'us-east-1', 
        });
        this.dynamoDb = new AWS.DynamoDB.DocumentClient();
    }

    static getInstance() {
        if (!this.dynamoDb) {
            this.setDynamoDb();
        }
        return this.dynamoDb;
    }

    static async get(params) {
        return AWSService.getInstance().get(params);
    }

    async put(params) {
        return AWSService.getInstance().put(params);
    }

    async update(params) {
        return AWSService.getInstance().update(params);
    }

    async delete(params) {
        return AWSService.getInstance().delete(params);
    }

}


export { AWSService };