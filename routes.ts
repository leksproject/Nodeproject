import { EPERM } from 'constants';
import express from 'express';
import { parsev1controller } from './controllers/parserv1controller';
import { parsev2controller } from './controllers/parserv2controller';
import { apiresponse, result } from './models/apiresponse';
import { apirequest }  from './models/apirequest';

const router = express.Router();

router.post('/v1/parse/',function (req: express.Request, res: express.Response) {
    
    const data = req.body;
    let resp: apiresponse;

    try {
        const v1controller = new parsev1controller();
        const requestdata = data as apirequest;
        const resultdata: result = v1controller.processRequest(requestdata);
        console.log(data);
        resp = {data: resultdata, statuscode: 200};
    } catch {
        resp = { data: {clientId:'', firstName: '' , lastName: ''}, statuscode: 503};
    }
    res.contentType("application/json");
    res.send(resp);
});

router.post('/v2/parse',  function (req: express.Request, res: express.Response) {
    const data = req.body;
    let resp: apiresponse;

    try {
        const v1controller = new parsev2controller();
        const requestdata = data as apirequest;
        const resultdata: result = v1controller.processRequest(requestdata);
        resp = {data: resultdata, statuscode: 200};
    } catch {
        resp = { data: {clientId:'', firstName: '' , lastName: ''}, statuscode: 503};
    }
    res.contentType("application/json");
    res.send(resp);
});


export default router;