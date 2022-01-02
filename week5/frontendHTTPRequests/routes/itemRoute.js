const express = require('express');
const itemRouter = express.Router();
const {v4: uuid} = require('uuid');

let items = [
    {
        name: "Water bottle",
        desc: "Plastic water bottle",
        recycle: true,
        quan: 58,
        ppu: 0.10,
        _id: uuid()
    },
    {
        name: "Tire",
        desc: "Used car tire with or without rim",
        recycle: true,
        quan: 17,
        ppu: 15.98,
        _id: uuid()
    },
    {
        name: "Candy wrapper",
        desc: "Wrapping for various candy",
        recycle: true,
        quan: 223,
        ppu: 0.01,
        _id: uuid()
    }
]

itemRouter
    .get('/', (req, res) => {
        res.send(items);
    }) //GET all

    .get('/:itemsID', (req, res) => {
        const itemID = req.params.itemsID;
        const foundItem = items.filter(e => e._id === itemID);
        res.send(foundItem)
    }) //GET one

    .post('/', (req, res) => {
        const newEntry = req.body;
        newEntry._id = uuid();
        items.push(newEntry);
        res.send(`${req.body.name} has successfully been added to the database`)
    }) //POST one

    .put('/:itemsID', (req, res) => {
        const itemID = req.params.itemsID;
        const itemIndex = items.findIndex(e => e._id === itemID);
        Object.assign(items[itemIndex], req.body);
        res.send(`${items[itemIndex].name} has been updated successfully`);
    }) //PUT one

    .delete('/:itemsID', (req, res) => {
        const itemID = req.params.itemsID;
        const itemIndex = items.findIndex(e => e._id === itemID);
        items.splice(itemIndex, 1);
        res.send("Item has successfully been deleted from the database");
    }) //DELETE one

module.exports = itemRouter;