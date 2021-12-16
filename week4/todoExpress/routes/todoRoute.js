const express = require('express');
const todoRouter = express.Router();
const {v4: uuid} = require('uuid');

let todos = [
    {
        name: "Clean the kitchen",
        desc: "Dont forget to wash the dishes",
        isComplete: false,
        _id: uuid()
    },
    {
        name: "Mow the lawn",
        desc: "Also trim the hedges and weedeat",
        isComplete: false,
        _id: uuid()
    },
    {
        name: "Meeting at 4:00pm",
        desc: "Dont miss your meeting with the client",
        isComplete: false,
        _id: uuid()
    }
]

todoRouter
    .get('/', (req, res) => {
        res.send(todos);
    }) //GET all

    .get('/:todoID', (req, res) => {
        const itemID = req.params.todoID;
        const foundItem = todos.filter(e => e._id === itemID);
        res.send(foundItem)
    }) //GET one

    .post('/', (req, res) => {
        const newEntry = req.body;
        newEntry._id = uuid();
        todos.push(newEntry);
        res.send(`${req.body.name} has successfully been added to the database`)
    }) //POST one

    .put('/:todoID', (req, res) => {
        const itemID = req.params.todoID;
        const itemIndex = todos.findIndex(e => e._id === itemID);
        Object.assign(todos[itemIndex], req.body);
        res.send(`${todos[itemIndex].name} has been updated successfully`);
    }) //PUT one

    .delete('/:todoID', (req, res) => {
        const itemID = req.params.todoID;
        const itemIndex = todos.findIndex(e => e.id === itemID);
        todos.splice(todos[itemIndex], 1);
        res.send("Item has successfully been deleted from the database");
    }) //DELETE one

module.exports = todoRouter;