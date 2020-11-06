"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parsev1controller = void 0;
var apiresponse_1 = require("./../models/apiresponse");
var parsev1controller = /** @class */ (function () {
    function parsev1controller() {
    }
    parsev1controller.prototype.processRequest = function (requestdata) {
        // split the string by 0000 and replace 0 with spaces.
        var data = new apiresponse_1.result();
        if (requestdata.data.length > 0) {
            var splittedValues = requestdata.data.split('0000');
            console.log(splittedValues);
            if (splittedValues.length !== 2) {
                throw Error('input is not valid');
            }
            data.firstName = splittedValues[0] + '0000';
            var splittlastNameclientid = splittedValues[1].split("000");
            if (splittedValues.length !== 2) {
                throw Error('input is not valid');
            }
            data.lastName = splittlastNameclientid[0] + '000';
            data.clientId = splittlastNameclientid[1];
        }
        return data;
    };
    return parsev1controller;
}());
exports.parsev1controller = parsev1controller;
