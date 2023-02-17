import AWS from 'aws-sdk';
import {DatabaseSchema} from "../databaseSchema";

class AWSProvider extends DatabaseSchema {

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
        return AWSProvider.getInstance().get(params).promise()
        .then((data) => data.Item)
        .catch((err) => {
            console.log("Error getting data: ", err);
            throw err;
        });
    }

    static async put(params) {
        return AWSProvider.getInstance().put(params);
    }

    static async update(params) {
        return AWSProvider.getInstance().update(params);
    }

    static async delete(params) {
        return AWSProvider.getInstance().delete(params);
    }

}


export { AWSProvider };