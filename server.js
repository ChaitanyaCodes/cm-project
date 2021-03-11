import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import path from 'path';

// import userRoutes from './routes/users.js';
const __dirname = path.resolve();

const app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname,"client","build")));
app.use(express.static("public"));

// app.get('*',(req,res) => {
//   res.sendFile(__dirname,'client','index.html')
// });

// app.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname,"client", "public", "index.html"));
//   });

app.use(bodyParser.json({ limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
app.use(cors());

const CONNECTION_URI = 'mongodb+srv://Chaitanya:ChaitanyaCo@studentmanagement.uqabn.mongodb.net/StudentManagement?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify',false);
