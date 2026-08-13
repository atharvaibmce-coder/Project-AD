require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const  cors = require("cors");
const userRouter = require("./routes/user.routes");
const todoRouter = require("./routes/todo.routes");

const app = express()

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.URL)
.then(()=>{
    console.log("MongoDB connected ")
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
    
})
.catch((error)=>{
    console.log(error);
})

app.use("/api/auth", userRouter);
app.use("/api/todos", todoRouter);
