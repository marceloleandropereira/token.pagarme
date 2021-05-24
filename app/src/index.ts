// import express from 'express';

// const app = express();
// const port = process.env.PORT || 3030; // default port to listen
// const pagarme = require('pagarme')

// app.get('/', (req, res) => {
//   res.setHeader('Content-Type', 'text/html');
//   res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');


//   pagarme.client.connect({ api_key: 'ak_test_zFYrCqTYfWfcKqbvMaW43SawbtEeFI' })
//   .then(client => {
//     return client.security.encrypt({
//       card_number: '4242424242424242',
//       card_holder_name: 'Test Card',
//       card_expiration_date: '1225',
//       card_cvv: '123',
//     })
//   })
//   .then(card_hash => res.end(card_hash.trim()))
// });

// app.get('/api/item/:itemId', (req, res) => {
//   const { itemId } = req.params;
//   res.json({ itemId });
// });

// // start the express server
// app.listen(port, () => {
//   // tslint:disable-next-line:no-console
//   console.log(`server started at http://localhost:${port}`);
// });

// module.exports = app;
