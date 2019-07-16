const http = require("http2");
const fs = require("fs");

const options = {
    key: fs.readFileSync("localhost-key.pem"),
    cert: fs.readFileSync("localhost.pem")
};

http.createSecureServer(options, function (req, res) {
    res.write("Hello World!");
    res.end();
}).listen(3000);
