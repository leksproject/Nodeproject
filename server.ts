import express from 'express';
import bodyparser = require('body-parser');
import { parsev1controller } from './controllers/parserv1controller';
import { result, apiresponse } from './models/apiresponse';
import { parsev2controller } from './controllers/parserv2controller';
import router from './routes';

// Create the instance of the express application.
let app: express.Application = express();

// Parse the request body.
app.use(bodyparser.json());

app.use(router);

// Start the http server.
app.listen(3000, function () {
    console.log('app listening on port 3000');
});