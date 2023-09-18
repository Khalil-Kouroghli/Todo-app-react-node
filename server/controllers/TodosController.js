const Todo = require("../database/Todo.js");
module.exports = {
  getAll: async (req, res) => {
    try {
      const allTodos = await Todo.find({});
      res.json(allTodos);
    } catch (error) {
      res.json(error);
    }
  },
  getOne: async (req, res) => {
    try {
      const oneTodo = await Todo.find({ completed: req.params.completed });
      res.json(oneTodo);
    } catch (error) {
      res.json(error);
    }
  },

  addTodo: async (req, res) => {
    try {
      const oneTodo = await Todo.insertMany(req.body);
      res.status(201).json(oneTodo);
    } catch (error) {
      res.json(error);
    }
  },
  getByUser: async (req, res) => {
    try {
      const userTodos = await Todo.find({ user: req.params.user });
      res.json(userTodos);
    } catch (error) {
      res.json(error);
    }
  },

  deleteById: async (req, res) => {
    try {
      const deleted = await Todo.deleteOne({ _id: req.params.id });
      res.json(deleted);
    } catch (error) {
      res.json(error);
    }
  },
  updateById: async (req, res) => {
    try {
      const updated = await Todo.findOneAndUpdate(
        { _id: req.params.id },
        { completed: req.body.completed }
      );
      res.json(updated);
    } catch (error) {
      res.json(error);
    }
  },
};
