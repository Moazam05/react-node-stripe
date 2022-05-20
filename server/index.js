import express from 'express';
import dotenv from 'dotenv';

import CreateCheckoutSession from './api/Checkout.js';

dotenv.config();

const app = express();

app.get('/', (req, res) => res.send('API is running...'));

app.post('/create-session-checkout', CreateCheckoutSession);

const PORT = 8080;

app.listen(PORT, console.log('server listing on port', PORT));
