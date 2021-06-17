import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import path from "path";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

// routes import
import userRoutes from "./routes/userRouter.js";
import upCsv from "./routes/uploadCSV.js";
import fetchData from "./routes/fetchData.js";
import userData from "./routes/dashboardData.js";
import activateAcc from "./routes/activateAcc.js";

// initialize 
const __dirname = path.resolve();
dotenv.config();
const app = express();
app.use(express.json());
app.use(cookieParser());

// app.use(express.static(path.join(__dirname, "client", "build")));
// app.use(express.static("public"));

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

// cross origin requests
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);

// database and port connection
const CONNECTION_URI = process.env.DB;
// port connection
const PORT = process.env.PORT || 5000;
mongoose
  .connect(CONNECTION_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
  .catch((error) => console.log(error.message));

mongoose.set("useFindAndModify", false);

// use routes
app.use("/auth", userRoutes);
app.use("/upload", upCsv);
app.use("/fetch", fetchData);
app.use("/dash", userData);
app.use("/activate", activateAcc);

//serve static assets if in production
if(process.env.NODE_ENV === 'production'){
  // set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
  });
}


// handle error
process.on("unhandledRejection", (err) => {
  console.log(err.name, err.message);
  console.log("Unhandled Rejection. Shutting Down");
  server.close(() => {
    process.exit(1);
  });
});



// process.on("uncaughtException", (err) => {
//   console.log("Unhandled Exception. Shutting Down");
//   console.log(err.name, err.message);
//   process.exit(1);
// });