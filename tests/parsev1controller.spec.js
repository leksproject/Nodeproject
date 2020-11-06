"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("jest");
var parserv1controller_1 = require("./../controllers/parserv1controller");
test('test for parser', function () {
    var parserv1 = new parserv1controller_1.parsev1controller();
    var result = parserv1.processRequest({ data: "JOHN0000DOE000999676" });
    expect(result).not.toBe(null);
    expect(result.clientId).toBe("999676");
    expect(result.lastName).toBe("DOE000");
    expect(result.firstName).toBe("JOHN0000");
});
