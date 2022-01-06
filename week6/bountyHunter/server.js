const express = require('express');
const app = express();
const itemRouter = require('./routes/itemRoute.js');

const PORT = 9000;

app.use(express.json());
app.use('/items', itemRouter);

app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`)
})