const http = require('http');
const  express = require('express');

const app = express();

app.use((req,res,next)=>{

console.log('first Middleware !');
next();
})
app.use((req, res,next)=>{

    console.log('Second Middleware !');
    next();
    res.send('<h1>Hello</h1>');
})

app.use((req, res, next)=>{
    console.log('Third Middleware !');
    
})
const server = http.createServer(app);
server.listen(3000);