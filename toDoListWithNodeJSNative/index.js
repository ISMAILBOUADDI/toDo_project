const http = require('http');
var ejs = require('ejs');
const fs=require('fs');
const PORT = process.env.PORT || 8080;
const url = require("url");
let routes = require('./router/router')
const server = http.createServer(function (req, res) {

    let parsedURL = url.parse(req.url, true);
    let path = parsedURL.pathname;
    path = path.replace(/^\/+|\/+$/g, "");
    

    // let subPath = path.split('/')[1];
    // // console.log(path);
    if (path == "") {
        path = "index";
    } else {
        path = path.split("/")[0]
    }
    // let qs = parsedUrl.query
    // let headers = req.headers;
    // let method = req.method.toLowerCase();
    // console.log(path , routes[path])
    let route =
    typeof routes[path] !== "undefined" ? routes[path] : routes["404"];

    let data = {
        path: path,
        url: parsedURL.pathname,
        // query: queries,
        // headers: headers,
        // method: method
    };

    //pass data incase we need info about the request
    //pass the response object because router is outside our scope
    route(data, res , req);

});

server.listen(PORT, function () {
    console.log(`Listening on port ${PORT} `);
});

