const express = require('express');
const app = express();
const intakeRouter = require('./routes/itemsIntake')

const PORT = 3000;

app.use(express.json());
app.use('/item-intake', intakeRouter);

app.listen(PORT, () => {
    console.log(`App started on port: ${PORT}`);
})