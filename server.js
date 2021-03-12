import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import path from 'path';
import userRoutes from './routes/userRouter.js';

import dotenv from 'dotenv';

const __dirname = path.resolve();
dotenv.config();

const app = express();
app.use(express.json());

app.use(express.static(path.join(__dirname,"client","build")));
app.use(express.static("public"));


app.use(bodyParser.json({ limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));

app.use(cors());
process.on('uncaughtException', err => {
    console.log('Unhandled Exception. Shutting Down');
    console.log(err.name, err.message);
    process.exit(1);
  });

const PORT = process.env.PORT || 5000;
const CONNECTION_URI = process.env.DB;
mongoose.connect(CONNECTION_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

    mongoose.set('useFindAndModify',false);

    process.on('unhandledRejection', err => {
        console.log(err.name, err.message);
        console.log('Unhandled Rejection. Shutting Down');
        server.close(() => {
          process.exit(1);
        });
      });

app.use('/auth', userRoutes);
