// import { setupServer } from 'msw/node';
// import { rest } from 'msw'
const { setupServer } = require('msw/node');
const { rest } = require('msw');
const axios = require('axios');
const handler = [
    rest.get('/getName', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                yourname: 'woder'
            })
        )
    })
];
const server = new setupServer(handler[0]);
server.resetHandlers()
server.listen();
axios.get('/getName').then(res => {
    console.log(res);
})
// .catch(err => {
//     console.warn(err);
// })
server.close();