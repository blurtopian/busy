//import { createClient } from 'lightrpc';
// const options = {
//   timeout: 15000,
// };
// const steemUrl = process.env.STEEMJS_URL || 'https://rpc.blurt.world';
// const client = createClient(steemUrl, options);
// client.sendAsync = (message, params) =>
//   new Promise((resolve, reject) => {
//     client.send(message, params, (err, result) => {
//       if (err !== null) return reject(err);
//       return resolve(result);
//     });
//   });

const blurt = require('@blurtfoundation/blurtjs');
const steemUrl = process.env.STEEMJS_URL || 'https://rpc.blurt.world';
blurt.api.setOptions({ url: steemUrl, useAppbaseApi: true });
const client = blurt.api;

export default client;
