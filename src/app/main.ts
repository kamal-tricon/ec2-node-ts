import express = require('express');
import http from 'http';
import {Routers} from "./router/app.routing";
import cors from 'cors';
import { mongooseConnector } from "./mongoose";
import * as bodyParser from "body-parser";
import * as mongoose from 'mongoose';

export class Main {
    private readonly app: express.Application;
    private readonly server: http.Server;
    private routers: Routers;
    private route = express.Router();
    
    constructor() {
        this.routers = new Routers();
        this.app = express();
        // this.app.use(cors);
        this.app.use(bodyParser.urlencoded ({extended: true}));
        this.app.use(bodyParser.json());
        this.app.use(function(req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST');
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            next();
        })
        // this.app.use('/', this.route);
        this.app.use('/', this.routers.router);
        
        mongooseConnector.then(() => {
            console.log("MongoDB connected")
        }).catch((err) => {
            console.error('Cannot connent to mongodb. '+ err)
        })

        this.server = http.createServer(this.app).listen(3000, () => {
            console.log('App listening');
        })
    }

    getDefault() {
        this.routers.initiateGetCalls();
        // console.log('HIhih')
        // this.route.get('/name', (req, res) => {res.send('Kamlesh')})
    }

    initiatePostCalls() {
        this.routers.initiatePostCalls();
    }
}

