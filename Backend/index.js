require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const  cors = require("cors");
const userRouter = require("./routes/user.routes");
const todoRouter = require("./routes/todo.routes");

const app = express()

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.URL)
.then(()=>{
    console.log("MongoDB connected ")
})
.catch((error)=>{
    console.log(error);
})

app.use("/api/auth", userRouter);
app.use("/api/todos", todoRouter);


app.listen(3000, ()=>{
    console.log(`server running on port 3000`);
})