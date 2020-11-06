"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var parserv1controller_1 = require("./controllers/parserv1controller");
var parserv2controller_1 = require("./controllers/parserv2controller");
var router = express_1.default.Router();
router.post('/v1/parse/', function (req, res) {
    var data = req.body;
    var resp;
    try {
        var v1controller = new parserv1controller_1.parsev1controller();
        var requestdata = data;
        var resultdata = v1controller.processRequest(requestdata);
        console.log(data);
        resp = { data: resultdata, statuscode: 200 };
    }
    catch (_a) {
        resp = { data: { clientId: '', firstName: '', lastName: '' }, statuscode: 503 };
    }
    res.contentType("application/json");
    res.send(resp);
});
router.post('/v2/parse', function (req, res) {
    var data = req.body;
    var resp;
    try {
        var v1controller = new parserv2controller_1.parsev2controller();
        var requestdata = data;
        var resultdata = v1controller.processRequest(requestdata);
        resp = { data: resultdata, statuscode: 200 };
    }
    catch (_a) {
        resp = { data: { clientId: '', firstName: '', lastName: '' }, statuscode: 503 };
    }
    res.contentType("application/json");
    res.send(resp);
});
exports.default = router;
