// const stripeAPI = require('stripe')(process.env.SECRET_KEY);

// export default stripeAPI;

import Stripe from 'stripe';

let stripeAPI = Stripe(process.env.SECRET_KEY);

export default stripeAPI;
