import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import config from './config/config';
import route from './routes/route';

const app = express()

// Connection with DB (2)
mongoose.connect(config.db, () => {
	console.log("DB connected !")
})

// Parsing (4)
app.use(express.urlencoded({
    extended: true
}));

// Cors ( allow access to data for React ) (5)
app.use(cors())

// Routes (3)
app.use('/', route)

// Server status (1)
app.listen(config.port, () => {
	console.log("Server is running")
})