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

// Listen
exports.api = functions.https.onRequest(app);
