const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db.js');
const subscribeRoute = require('./routes/subscriber.route.js');

const app = express();
dotenv.config();


app.use(express.json());

app.use("/api/v1",subscribeRoute);

port =process.env.PORT;
connectDB().then(function () {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}).catch(function (error) {
    console.log(error);
});

