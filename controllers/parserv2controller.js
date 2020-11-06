"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parsev2controller = void 0;
var apiresponse_1 = require("./../models/apiresponse");
var parsev2controller = /** @class */ (function () {
    function parsev2controller() {
    }
    parsev2controller.prototype.processRequest = function (requestdata) {
        // split the string by 0000 and replace 0 with spaces.
        var data = new apiresponse_1.result();
        if (requestdata.data.length > 0) {
            var splittedValues = requestdata.data.split('0000');
            if (splittedValues.length !== 2) {
                throw Error('input is not valid');
            }
            data.firstName = splittedValues[0].replace("0", "");
            if (splittedValues.length !== 2) {
                throw Error('input is not valid');
            }
            var splittlastNameclientid = splittedValues[1].split("000");
            if (splittlastNameclientid.length !== 2) {
                throw Error('input is not valid');
            }
            data.lastName = splittlastNameclientid[0].replace("0", "");
            data.clientId = splittlastNameclientid[1].substring(0, 3) + '-' + splittlastNameclientid[1].substring(3);
        }
        return data;
    };
    return parsev2controller;
}());
exports.parsev2controller = parsev2controller;
