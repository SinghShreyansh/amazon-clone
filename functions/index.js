const functions = require("firebase-functions");

const express = require("express")
const cors = require("cors");
const stripe = require("stripe")( 'sk_test_51Jv4HASC2WBqFwecRxL4KipgMezAy6OYMcScnlzTSFE9ybMUyjIzBiqob648JjcQfVK3kj8CSc8BOiV0nup79w5N005OYjMFaJ' )

//API

// -App config
const app = express();

// -Middlewares
app.use(cors({ origin: true }))
app.use(express.json())

// -API routes
app.get('/', (request, response ) => response.status(200).send('hello world'))

app.post('/payments/create', async (request, response) => {
    const total = parseInt(request.query.total);

        const paymentIntent= await stripe.paymentIntents.create({ 
            amount : total,
            currency : "inr",
        })
  
   

    console.log("Payment received request ", total)

    // OK- Created
    response.status(201).send({
        clientSecret : paymentIntent.client_secret,
    })
})

// -Listen command
exports.api = functions.https.onRequest(app)

// Example endpoint
// http://localhost:5001/clone-981d0/us-central1/api