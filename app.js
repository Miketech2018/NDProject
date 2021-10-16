const http = require('http');

const server = http.createServer((req, res) => {
 //console.log(req);   
 if (req.url === '/') {
     res.end('this is the initial page')
 }else if (req.url === '/about') {
    res.end('this is the node course')
 } else {
   var errStr = `<h1>Oh! Oh!</h1><p>the resources you reques cannot be found</p><a href="/"> please return to the home page</a>`
    res.end(errStr);
 }
 

})
server.listen(5000)