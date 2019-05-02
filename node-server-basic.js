let http = require('http');
let products = require('./products')

let messageReceived = ( req, res ) => {
    res.writeHead( 200, {'Content-Type': 'text/plain'} );
    if(req.method === 'GET' && req.url === '/products') {
        res.write(JSON.stringify(products));
    }
    else if(req.method === 'POST' && req.url === '/products') {
        postProducts(req, res);
    }
    // else if(req.method === 'PUT' && req.url === '/products') {
    //     res.write('You wanted to PUT something?');
    // }
    // else if(req.method === 'DELETE' && req.url === '/products') {
    //     res.write('You wanted to DELETE something?');
    // }
    else {
        res.write('Not Found!');
    }
    res.end();
}

function postProducts(req, res) {
    let body = [];
    req.on('data', (chunk) => {
        body.push(chunk);
    }).on('end', () => {
        body = Buffer.concat(body).toString();
        // body = JSON.parse(body);
        let product = JSON.parse(body);
        products.push(product);
    })
}

let server = http.createServer(messageReceived);

server.listen(8080);