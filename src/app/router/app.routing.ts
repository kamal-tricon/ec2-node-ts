import * as express  from 'express';
import { Router } from 'express';
import { Quiz } from '../model/Quiz';
import { Station } from '../model/Station';
import { Train } from '../model/Train';
import {User} from '../model/User';

export class Routers {
    public readonly router: Router = express.Router();

    constructor() {}

    initiateGetCalls() {
        this.router.get('/', (req, res) => {
            console.log('jihiuhuuyg')
            res.send('Hello')
        });

        this.router.get('/name/:id', (req, res) => {
            console.log('jihiuhuuyg9999')
            res.send('Kamlesh Kumar' + req.params.id+req.query.value)
        });

        this.router.get('/name', (req, res) => {
            console.log('jihiuhuuyguuuuuu')
            res.send('Rohit huhug - '+req.query.prof)
        });
    }

    initiatePostCalls() {
        this.router.post('/login', async (req, res) => {
            console.log(req.body)
            try {
                const user = await User.find({username: req.body.username, password: req.body.password});
                
            if (user.length > 0) {
                const object = {
                    error: '',
                    name: user[0].name,
                    email: user[0].email,
                };
                res.status(200).send(object);
            } else {
                res.status(200).send({error: 'Username or password is incorrect'});
            }
        } catch {
            res.status(500).send("Could not fetch the data right now");
        }
        });

        this.router.post('/getStation', async (req, res) => {
            try {
                const station = await Station.find({});
                res.status(200).send(station);
            } catch {
                res.status(500).send("Could not fetch the data right now");
            }
        });

        this.router.post('/getTrain', async (req, res) => {
            try {
                const train = await Train.find({});
                res.status(200).send(train);
            } catch {
                res.status(500).send("Could not fetch the data right now");
            }
        });

        this.router.post('/deleteTrain', async (req, res) => {
            try {
                const train = await Train.deleteOne({trainNumber: req.body.trainNumber});
                res.status(200).send(train);
            } catch {
                res.status(500).send("Could not fetch the data right now");
            }
        });

        this.router.post('/deleteStation', async (req, res) => {
            try {
                const station = await Station.deleteOne({stationCode: req.body.stationCode});
                res.status(200).send(station);
            } catch {
                res.status(500).send("Could not fetch the data right now");
            }
        });

        this.router.get('/getSummary', async (req, res) => {
            try {
                const trains = await Train.countDocuments();
                const stations = await Station.countDocuments();
                res.status(200).send({trainCount: trains, stationCount: stations});
            } catch {
                res.status(500).send("Could not fetch the data right now");
            }
        });

        this.router.post('/addStation', async (req, res) => {
            try {
                const station = new Station(req.body);
                station.save().then(() => {
                    res.status(200).send('Station added successfully')
                }).catch((err) => {
                    res.status(400).send('Something went wrong')
                })
            } catch {
                res.status(500).send("Could not add the station right now");
            }
        });

        this.router.post('/addTrain', async (req, res) => {
            try {
                const isValid = await Train.findOne({trainNumber: req.body.trainNumber});
                if (isValid == null) {
                    const train = new Train(req.body);
                    train.save().then(() => {
                        res.status(200).send('Train added successfully')
                    }).catch((err) => {
                        res.status(400).send('Something went wrong')
                    })
                } else {
                    res.status(400).send('This train number elready exists.')
                }
            } catch {
                res.status(500).send("Could not add the train right now");
            }
        });

        this.router.post('/savequizz', async (req, res) => {
            console.log(req.body)
            try {
                const quiz = new Quiz(req.body);
                quiz.save().then(() => {
                    res.status(200).send('Quiz added successfully')
                }).catch((err) => {
                    res.status(400).send('Something went wrong')
                })
            } catch {
                res.status(500).send("Could not add the quiz right now");
            }
        });

        this.router.post('/updatequizz', async (req, res) => {
            console.log(req.body)
            try {
                const quiz = await Quiz.findOneAndUpdate({_id: req.body.id}, 
                    {
                        $push: {
                            questions: [...req.body.questions]
                        }
                    })
                quiz.save().then(() => {
                    res.status(200).send('Quiz updated successfully')
                }).catch((err) => {
                    res.status(400).send('Something went wrong')
                })
            } catch {
                res.status(500).send("Could not add the quiz right now");
            }
        });

        this.router.post('/getquizz', async (req, res) => {
            const quiz = await Quiz.find({}, 'id title');
            try {
                res.status(200).send(quiz);
            } catch {
                res.status(500).send("Could not add the quiz right now");
            }
        });

        this.router.post('/deletequiz', async (req, res) => {
            try {
                const quiz = await Quiz.deleteOne({_id: req.body.id});
                res.status(200).send(quiz);
            } catch {
                res.status(500).send("Could not fetch the data right now");
            }
        });

        this.router.post('/getquizzdetails', async (req, res) => {
            const quiz = await Quiz.find({_id: req.body.id});
            try {
                res.status(200).send(quiz);
            } catch {
                res.status(500).send("Could not add the quiz right now");
            }
        });
    }
}