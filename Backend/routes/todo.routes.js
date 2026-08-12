const express = require("express");
const { viewTodo, createTodo, updateTodo, removeTodo } = require("../controller/todo.controller");
const { auth } = require("../middleware/auth.middleware");

const todoRouter = express.Router();

//view todo
todoRouter.get("/", auth, viewTodo);

//create Todo
todoRouter.post("/", auth, createTodo);

//update Todo
todoRouter.put("/:id", auth, updateTodo);

//remove todo
todoRouter.delete("/:id", auth, removeTodo);

module.exports = todoRouter;