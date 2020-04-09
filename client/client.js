const got = require('got');
const daprPort = process.env.DAPR_HTTP_PORT;

console.log(process.env);

got(`http://localhost:${daprPort}/v1.0/invoke/echo/method/hello-from-client`)
.then(r => console.log('RESPONSE BODY:' + r.body))
.catch(r => console.log(r));
