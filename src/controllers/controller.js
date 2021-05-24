exports.get = (req, res, next) => {
  const pagarme = require('pagarme')
  pagarme.client.connect({ api_key: 'ak_test_zFYrCqTYfWfcKqbvMaW43SawbtEeFI' })
   .then(client => {
     return client.security.encrypt({
       card_number: '4242424242424242',
       card_holder_name: 'Test Card',
       card_expiration_date: '1225',
       card_cvv: '123',
     })
   })
   .then(card_hash => res.status(201).send(card_hash.trim()))
};