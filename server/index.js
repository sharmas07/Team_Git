import express from 'express';
import * as dotenv from 'dotenv'
import cors from 'cors'
import bodyParser from 'body-parser';
import connectDB from './mongodb/connect.js'
import signup from './routes/signup.js'
import login from './routes/login.js'
import addmember from './routes/addmember.js'
import secretkeyFind from './routes/secretKeyFind.js'
import getbyusername from './routes/getbyusername.js'
dotenv.config();
const app = express();
app.use(bodyParser.json())
app.use(cors());
app.use(express.json({limit: '50mb'}));
app.use('/api/v1/signup', signup)
app.use('/api/v1/login', login)
app.use('/api/v1/addmember', addmember)
app.use('/api/v1/findbysecretkey', secretkeyFind)
app.use('/api/v1/getbyusername', getbyusername)
app.get('/', async(req,res)=>{
    res.status(201).send('hello from familyBook')
})
const startServer = async ()=>{
    try {
        connectDB(process.env.MONGODB_URL)
    } catch (error) {
    }
    app.listen(8080, ()=>{
        console.log('server started')
    })
}
startServer();