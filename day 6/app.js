const fs = require('fs');

const requestHandler = (req,res)=>{

    const url = req.url;
    const method = req.method;
    if (url ==='/' )
        res.setHeaader('Content-Type', 'text/html');
    res.write('<html')
    res.write('<head><title>Enter From Details <title></head>');
    res.write('<body><form action="/message" method="POST"><input type="text" name="input placeholder">');
    res.write('</html>');
