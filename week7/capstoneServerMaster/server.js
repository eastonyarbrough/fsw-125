const express = require('express');
const app = express();
const inventoryRouter = require('./routes/inventoryRoute.js')

const PORT = 9000;

app.use(express.json());
app.use('/inventory', inventoryRouter);

app.use((err, req, res, next) => {
    console.log(err);
    return res.status(500).send({errMsg: err.message});
})

app.listen(PORT, () => {
    console.log(`App is running on port: ${PORT}`);
});