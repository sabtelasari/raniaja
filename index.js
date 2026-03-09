// const express = require('express')
// const app = express()
// // app.get('/', (req, res) =>{
// // res.send('Hello World!');
// });
// app.listen(3000);

import express from 'express';
import mongoose from 'mongoose';
import router from './routes/note.js';
import cors from 'cors';

const app = express()

const db = 'mongodb+srv://rani:rani@dbrani.wrxlyra.mongodb.net/?appName=Dbrani'

mongoose.connect(db)
.then(()=>console.log('connected to DB'))
.catch((err)=>console.error('gagal connect', err));

app.use(express.json())

app.use(cors());

app.use('/notes', router);

app.listen(3000, ()=>{
    console.log('sudah running')
});


