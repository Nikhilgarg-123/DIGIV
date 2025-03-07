const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db.js');

const app = express();
dotenv.config();

port =process.env.PORT;
connectDB().then(function () {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}).catch(function (error) {
    console.log(error);
});

