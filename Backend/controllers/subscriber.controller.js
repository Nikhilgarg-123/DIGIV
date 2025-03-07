const subscribemodel = require("../models/subscriber.model.js");

const Subscribe = async (req, res) => {
    try {
        const { email } = req.body;
        const subscriber = new subscribemodel({ email });
        await subscriber.save();
        res.status(200).json({ message: "Subscribed successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error subscribing to newsletter" });
    }
}

const unsubscribe = async (req, res) => {
    try {
        const { email } = req.body;
        await subscribemodel.deleteOne({ email });
        res.status(200).json({ message: "Unsubscribed successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error unsubscribing from newsletter" });
    }
}


module.exports = {Subscribe , unsubscribe};