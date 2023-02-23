import AWS from 'aws-sdk';
import {DatabaseSchema} from "../databaseSchema";

class AWSProvider implements DatabaseSchema {
    static dynamoDb: AWS.DynamoDB.DocumentClient;

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

    static async get(params: AWS.DynamoDB.DocumentClient.GetItemInput) {
        return AWSProvider.getInstance().get(params).promise()
        .then((data) => data.Item)
        .catch((err) => {
            console.log("Error getting data: ", err);
            throw err;
        });
    }

    static async put(params: AWS.DynamoDB.DocumentClient.PutItemInput) {
        return AWSProvider.getInstance().put(params).promise()
        .then((_) => true)
        .catch((err) => {
            console.log("Error putting data: ", err);
            throw err;
        });
    }

    static async update(params: AWS.DynamoDB.DocumentClient.UpdateItemInput) {
        return AWSProvider.getInstance().update(params).promise()
        .then((_) => true)
        .catch((err) => {
            console.log("Error updating data: ", err);
            throw err;
        });
    }

    static async delete(params: AWS.DynamoDB.DocumentClient.DeleteItemInput) {
        return AWSProvider.getInstance().delete(params).promise()
        .then((_) => true)
        .catch((err) => {
            console.log("Error deleting data: ", err);
            throw err;
        });
    }

}


export { AWSProvider };