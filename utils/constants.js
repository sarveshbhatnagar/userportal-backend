import {AWSService} from "../databases/awsService";

class Tables {
    static EMPLOYEE = 'st-employee';
    static PERMISSION = 'st-permission';
    static TEAMS = 'st-teams';
}

const DATABASE = AWSService;

export { Tables, DATABASE };