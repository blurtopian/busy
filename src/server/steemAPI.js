// const createClient = require('lightrpc').createClient;

// const client = createClient(process.env.STEEMJS_URL || 'https://rpc.blurt.world');
// client.sendAsync = (message, params) =>
//   new Promise((resolve, reject) => {
//     client.send(message, params, (err, result) => {
//       if (err !== null) return reject(err);
//       return resolve(result);
//     });
//   });

// module.exports = client;

const blurt = require('@blurtfoundation/blurtjs');

const steemUrl = process.env.STEEMJS_URL || 'https://rpc.blurt.world';
blurt.api.setOptions({ url: steemUrl, useAppbaseApi: true });
const client = blurt.api;

module.exports = client;
