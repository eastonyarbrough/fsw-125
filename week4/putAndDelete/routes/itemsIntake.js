const express = require('express');
const intakeRouter = express.Router();
const {v4: uuidv4} = require('uuid');

let items = [
    {
        name: "Water bottle",
        desc: "Plastic water bottle",
        recycle: true,
        quan: 58,
        ppu: 0.10,
        _id: uuidv4()
    },
    {
        name: "Tire",
        desc: "Used car tire with or without rim",
        recycle: true,
        quan: 17,
        ppu: 15.98,
        _id: uuidv4()
    },
    {
        name: "Candy wrapper",
        desc: "Wrapping for various candy",
        recycle: true,
        quan: 223,
        ppu: 0.01,
        _id: uuidv4()
    }
]

intakeRouter
    .get('/', (req, res) => {
        res.send(items);
    }) //GET all

    .get('/:itemid', (req, res) => {
        const itemID = req.params.itemid;
        const filterItem = items.filter(e => e._id === itemID);
        res.send(filterItem);
    }) //GET one

    .post('/', (req, res) => {
        const newIntake = req.body;
        newIntake._id = uuidv4();
        items.push(newIntake);
        res.send(`Successfully added ${newIntake.name} to the database`);
    }) //POST one

    .put('/:itemid', (req, res) => {
        const itemID = req.params.itemid;
        const itemIndex = items.findIndex(e => e._id === itemID);
        Object.assign(items[itemIndex], req.body);
        res.send(`${items[itemIndex].name} successfully updated`);
    }) //PUT one

    .delete('/:itemid', (req, res) => {
        const itemID = req.params.itemid;
        const itemIndex = items.findIndex(e => e._id === itemID);
        items.splice(itemIndex, 1);
        res.send("Item was successfully deleted");
    }) //DELETE one

module.exports = intakeRouter;