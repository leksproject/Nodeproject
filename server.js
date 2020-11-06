"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var bodyparser = require("body-parser");
var routes_1 = __importDefault(require("./routes"));
// Create the instance of the express application.
var app = express_1.default();
// Parse the request body.
app.use(bodyparser.json());
app.use(routes_1.default);
// Start the http server.
app.listen(3000, function () {
    console.log('app listening on port 3000');
});
