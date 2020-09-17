const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51HS47TIwmwJq5l3a0Phz49gZLWz6yvw2FtZpEAS7AgUvhsYakFuNgk4ynT9VJjXoBlcSebOK2WlZTCoLELUyDkb800n7zkSt3b");

// APP config
const app = express();

// Middleware
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get('/', (req, res) => res.status(200).send('hello world'))
app.post('/payments/create', async (req, res) => {
    const total = req.query.total;

    console.log('Payment Request Recieved for', total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd"
    });

    res.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

// Listen
exports.api = functions.https.onRequest(app);
