import { error } from 'console';
import { isNull } from 'util';
import { apirequest } from '../models/apirequest';
import { result } from './../models/apiresponse';

export class parsev1controller {

    constructor() {
    
    }
    
    processRequest(requestdata: apirequest): result  {
        // split the string by 0000 and replace 0 with spaces.

        let data: result = new result();

        if (requestdata.data.length >  0) {

            let splittedValues: string[] = requestdata.data.split('0000');
            console.log(splittedValues);
            if (splittedValues.length !== 2){
                throw Error('input is not valid');
            }
            data.firstName = splittedValues[0] + '0000';
            let splittlastNameclientid = splittedValues[1].split("000");
            if (splittedValues.length !== 2){
                throw Error('input is not valid');
            }
            data.lastName = splittlastNameclientid[0] + '000';
            data.clientId = splittlastNameclientid[1];
        }
       
        return data;
    }

}