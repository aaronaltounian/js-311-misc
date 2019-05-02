//my ip 192.168.36.87.
var http = require('http');
let users = require("C:/Users/aaron/Documents/jsdev/advanced-projects/node-web-server/state.js").users;
let products = require("C:/Users/aaron/Documents/jsdev/advanced-projects/node-web-server/state.js").products;
let server = http.createServer(messageReceived);
server.listen(8080);

//1. How can you code decision without if statements
//2. How can you get rid of the duplicate code for JSON.stringify
let routes = {
  "GET": {
    '/': function(req,res){res.write('default')},
    "/users": getUsers,
    "/products": getProducts
  }
}

function messageReceived(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});

    let handler = routes[req.method][req.url];
    handler(req, res);
    // if(req.method === "GET" && req.url === "/users"){
    //   getUsers(req, res);
    // }
    // else if(req.method === "GET" && req.url === "/products"){
    //   getProducts(req, res);
    // }
    // else{
    //  res.write("Not Found");
    // }
    res.end();
}

function getUsers(req, res){
    let usersJSON = JSON.stringify(users);
    res.write(usersJSON);
}
function getProducts(req, res){
    let productsJSON = JSON.stringify(products);
    res.write(productsJSON);
}