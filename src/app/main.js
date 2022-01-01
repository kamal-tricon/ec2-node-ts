"use strict";
exports.__esModule = true;
exports.Main = void 0;
var express = require("express");
var http = require("http");
var app_routing_1 = require("./router/app.routing");
// import cors from 'cors';
var mongoose_1 = require("./mongoose");
var bodyParser = require("body-parser");
var Main = /** @class */ (function () {
    function Main() {
        this.route = express.Router();
        this.routers = new app_routing_1.Routers();
        this.app = express();
        // this.app.use(cors);
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(bodyParser.json());
        this.app.use(function (req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST');
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            next();
        });
        // this.app.use('/', this.route);
        this.app.use('/', this.routers.router);
        mongoose_1.mongooseConnector.then(function () {
            console.log("MongoDB connected");
        })["catch"](function (err) {
            console.error('Cannot connent to mongodb. ' + err);
        });
        this.server = http.createServer(this.app).listen(4000, function () {
            console.log('App listening');
        });
    }
    Main.prototype.getDefault = function () {
        this.routers.initiateGetCalls();
        // console.log('HIhih')
        // this.route.get('/name', (req, res) => {res.send('Kamlesh')})
    };
    Main.prototype.initiatePostCalls = function () {
        this.routers.initiatePostCalls();
    };
    return Main;
}());
exports.Main = Main;
