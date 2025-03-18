const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });

    if (req.url === "/") {  ///, /about, and /contact
        res.end("<h1>Welcome to the Home Page</h1>");
    } else if (req.url === "/about") {
        res.end("<h1>About Us</h1><p>This is the about page.</p>");
    } else if (req.url === "/contact") {
        res.end("<h1>Contact Us</h1><p>Email: contact@example.com</p>");
    } else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end("<h1>404 - Page Not Found</h1>");
    }
});

const PORT = 3000;     //http://localhost:3000/  //http://localhost:3000/about //http://localhost:3000/contact
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
