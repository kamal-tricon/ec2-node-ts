"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.Routers = void 0;
var express = require("express");
var Quiz_1 = require("../model/Quiz");
var Station_1 = require("../model/Station");
var Train_1 = require("../model/Train");
var User_1 = require("../model/User");
var Routers = /** @class */ (function () {
    function Routers() {
        this.router = express.Router();
    }
    Routers.prototype.initiateGetCalls = function () {
        this.router.get('/', function (req, res) {
            console.log('jihiuhuuyg');
            res.send('Hello');
        });
        this.router.get('/name/:id', function (req, res) {
            console.log('jihiuhuuyg9999');
            res.send('Kamlesh Kumar' + req.params.id + req.query.value);
        });
        this.router.get('/name', function (req, res) {
            console.log('jihiuhuuyguuuuuu');
            res.send('Rohit huhug - ' + req.query.prof);
        });
    };
    Routers.prototype.initiatePostCalls = function () {
        var _this = this;
        this.router.post('/login', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var user, object, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        console.log(req.body);
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, User_1.User.find({ username: req.body.username, password: req.body.password })];
                    case 2:
                        user = _b.sent();
                        if (user.length > 0) {
                            object = {
                                error: '',
                                name: user[0].name,
                                email: user[0].email
                            };
                            res.status(200).send(object);
                        }
                        else {
                            res.status(200).send({ error: 'Username or password is incorrect' });
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        _a = _b.sent();
                        res.status(500).send("Could not fetch the data right now");
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); });
        this.router.post('/getStation', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var station, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, Station_1.Station.find({})];
                    case 1:
                        station = _b.sent();
                        res.status(200).send(station);
                        return [3 /*break*/, 3];
                    case 2:
                        _a = _b.sent();
                        res.status(500).send("Could not fetch the data right now");
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); });
        this.router.post('/getTrain', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                // try {
                //     const train = await Train.find({});
                //     res.status(200).send(train);
                // } catch {
                //     res.status(500).send("Could not fetch the data right now");
                // }
                Train_1.Train.find({}, function (err, docs) {
                    docs.forEach(function (rec) { rec.trainName = 'koihj'; });
                    console.log(docs);
                    res.status(200).send(docs);
                });
                return [2 /*return*/];
            });
        }); });
        this.router.post('/deleteTrain', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var train, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, Train_1.Train.deleteOne({ trainNumber: req.body.trainNumber })];
                    case 1:
                        train = _b.sent();
                        res.status(200).send(train);
                        return [3 /*break*/, 3];
                    case 2:
                        _a = _b.sent();
                        res.status(500).send("Could not fetch the data right now");
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); });
        this.router.post('/deleteStation', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var station, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, Station_1.Station.deleteOne({ stationCode: req.body.stationCode })];
                    case 1:
                        station = _b.sent();
                        res.status(200).send(station);
                        return [3 /*break*/, 3];
                    case 2:
                        _a = _b.sent();
                        res.status(500).send("Could not fetch the data right now");
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); });
        this.router.get('/getSummary', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var trains, stations, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, Train_1.Train.countDocuments()];
                    case 1:
                        trains = _b.sent();
                        return [4 /*yield*/, Station_1.Station.countDocuments()];
                    case 2:
                        stations = _b.sent();
                        res.status(200).send({ trainCount: trains, stationCount: stations });
                        return [3 /*break*/, 4];
                    case 3:
                        _a = _b.sent();
                        res.status(500).send("Could not fetch the data right now");
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); });
        this.router.post('/addStation', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var station;
            return __generator(this, function (_a) {
                try {
                    station = new Station_1.Station(req.body);
                    station.save().then(function () {
                        res.status(200).send('Station added successfully');
                    })["catch"](function (err) {
                        res.status(400).send('Something went wrong');
                    });
                }
                catch (_b) {
                    res.status(500).send("Could not add the station right now");
                }
                return [2 /*return*/];
            });
        }); });
        this.router.post('/addTrain', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var isValid, train, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, Train_1.Train.findOne({ trainNumber: req.body.trainNumber })];
                    case 1:
                        isValid = _b.sent();
                        if (isValid == null) {
                            train = new Train_1.Train(req.body);
                            train.save().then(function () {
                                res.status(200).send('Train added successfully');
                            })["catch"](function (err) {
                                res.status(400).send('Something went wrong');
                            });
                        }
                        else {
                            res.status(400).send('This train number elready exists.');
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        _a = _b.sent();
                        res.status(500).send("Could not add the train right now");
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); });
        this.router.post('/savequizz', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var quiz;
            return __generator(this, function (_a) {
                console.log(req.body);
                try {
                    quiz = new Quiz_1.Quiz(req.body);
                    quiz.save().then(function () {
                        res.status(200).send('Quiz added successfully');
                    })["catch"](function (err) {
                        res.status(400).send('Something went wrong');
                    });
                }
                catch (_b) {
                    res.status(500).send("Could not add the quiz right now");
                }
                return [2 /*return*/];
            });
        }); });
        this.router.post('/updatequizz', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var quiz, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        console.log(req.body);
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, Quiz_1.Quiz.findOneAndUpdate({ _id: req.body.id }, {
                                $push: {
                                    questions: __spreadArray([], req.body.questions, true)
                                }
                            })];
                    case 2:
                        quiz = _b.sent();
                        quiz.save().then(function () {
                            res.status(200).send('Quiz updated successfully');
                        })["catch"](function (err) {
                            res.status(400).send('Something went wrong');
                        });
                        return [3 /*break*/, 4];
                    case 3:
                        _a = _b.sent();
                        res.status(500).send("Could not add the quiz right now");
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); });
        this.router.post('/getquizz', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var quiz;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Quiz_1.Quiz.find({}, 'id title')];
                    case 1:
                        quiz = _a.sent();
                        try {
                            res.status(200).send(quiz);
                        }
                        catch (_b) {
                            res.status(500).send("Could not add the quiz right now");
                        }
                        return [2 /*return*/];
                }
            });
        }); });
        this.router.post('/deletequiz', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var quiz, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, Quiz_1.Quiz.deleteOne({ _id: req.body.id })];
                    case 1:
                        quiz = _b.sent();
                        res.status(200).send(quiz);
                        return [3 /*break*/, 3];
                    case 2:
                        _a = _b.sent();
                        res.status(500).send("Could not fetch the data right now");
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); });
        this.router.post('/getquizzdetails', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var quiz;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Quiz_1.Quiz.find({ _id: req.body.id })];
                    case 1:
                        quiz = _a.sent();
                        try {
                            res.status(200).send(quiz);
                        }
                        catch (_b) {
                            res.status(500).send("Could not add the quiz right now");
                        }
                        return [2 /*return*/];
                }
            });
        }); });
    };
    return Routers;
}());
exports.Routers = Routers;
