const express = require('express');
const app = express();
const partsRouter = require('./routes/partsRoute');

const PORT = 3000;

app.use(express.json());
app.use('/parts', partsRouter);

app.listen(PORT, () => console.log(`App is running on port: ${PORT}`))