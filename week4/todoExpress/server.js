const express = require('express');
const app = express();
const todoRouter = require('./routes/todoRoute');

const PORT = 3000;

app.use(express.json());
app.use('/todo', todoRouter);

app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`)
})