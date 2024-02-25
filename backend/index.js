import express, { response } from 'express'
import mongoose from 'mongoose';
import { PORT, mongoDBURL } from './config.js';
import bookRoute from '../backend/routes/booksRoute.js'
import cors from 'cors'

const app = express();

//Middleware for parsing JSON
app.use(express.json())

//middleware CORS
app.use(cors());
// app.use(cors({
//     origin: 'http://localhost:5173',
//     methods: ['GET','POST','PUT','DELETE'],
//     allowedHeaders: ['Content-Type']
// }))

app.get('/',(request,response)=>{
console.log(request);
return response.status(234).send("welcome to express js")
})

app.use('/books',bookRoute)
mongoose.connect(mongoDBURL)
.then(()=>{
    console.log('App connected to DB');
    app.listen(PORT,()=>{
        console.log(`App is listening to ${PORT}`);
    })
})
.catch((error)=>{
console.log(error);
})