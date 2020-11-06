"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("jest");
var parserv2controller_1 = require("./../controllers/parserv2controller");
test('test for parser', function () {
    var parserv1 = new parserv2controller_1.parsev2controller();
    var result = parserv1.processRequest({ data: "JOHN0000DOE000999676" });
    expect(result).not.toBe(null);
    expect(result.clientId).toBe("999-676");
    expect(result.lastName).toBe("DOE");
    expect(result.firstName).toBe("JOHN");
});
