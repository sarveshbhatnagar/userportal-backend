import {AWSProvider} from "../repository/providers/awsProvider";

class Tables {
    static EMPLOYEE = 'st-employee';
    static PERMISSION = 'st-permission';
    static TEAMS = 'st-teams';
}

class Messages {
    static MISSINGARGUMENTS = 'Missing arguments';
    static INVALIDARGUMENTS = 'Invalid arguments';
}

const DATABASE = AWSProvider;

export { Tables, DATABASE, Messages };