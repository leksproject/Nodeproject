import { StringLiteral } from "typescript";

// This is type definition for the reponse.
export class result{
    public firstName: string = '';
    public lastName: String = '';
    public clientId: string = '';

    constructor() {
        
    }
}

// This is for the response we are going to sendback to caller.
export interface apiresponse{
    statuscode: number;
    data: result
}