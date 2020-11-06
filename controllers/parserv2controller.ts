import { apirequest } from '../models/apirequest';
import { result } from './../models/apiresponse';

export class parsev2controller {

    constructor() {
    
    }
    
    processRequest(requestdata: apirequest): result {
        // split the string by 0000 and replace 0 with spaces.

        let data: result = new result();

        if (requestdata.data.length > 0) {

            let splittedValues = requestdata.data.split('0000');

            if (splittedValues.length !== 2){
                throw Error('input is not valid');
            }

            data.firstName = splittedValues[0].replace("0", "");

            if (splittedValues.length !== 2){
                throw Error('input is not valid');
            }
            let splittlastNameclientid = splittedValues[1].split("000");
            if (splittlastNameclientid.length !== 2){
                throw Error('input is not valid');
            }
            
            data.lastName = splittlastNameclientid[0].replace("0", "");
            data.clientId = splittlastNameclientid[1].substring(0, 3) + '-' + splittlastNameclientid[1].substring(3);       
        }

        return data;
    }

}