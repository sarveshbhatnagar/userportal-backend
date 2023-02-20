import {AWSProvider} from "../repository/providers/awsProvider";

class Tables {
    static EMPLOYEE = 'st-employee';
    static PERMISSION = 'st-permission';
    static TEAMS = 'st-teams';
}

const DATABASE = AWSProvider;

export { Tables, DATABASE };