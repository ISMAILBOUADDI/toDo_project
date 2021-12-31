const http = require("http");
const Controller = require("./controllers");
const { getReqData } = require("./data");

const PORT = process.env.PORT || 5000;

const server = http.createServer(async (req, res) => {  

     if (req.url.match(/([a-z]+)\/([0-9]+)/) && req.method === "GET") {
        try {
           
            const table = req.url.split("/")[1];
            const id = req.url.split("/")[2];
            const todos = await new Controller().get(table,id);
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify(todos));
        } catch (error) {
            res.writeHead(404, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ message: error }));
        }
    }

   else if (req.url.match(/([a-z]+)/) && req.method === "GET") {
        const table = req.url.split("/")[1];
        const todos = await new Controller().getAll(table);
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(todos));
    }
  // : DELETE
    else if (req.url.match(/([a-z]+)\/([0-9]+)/) && req.method === "DELETE") {
        try {
         
            const table = req.url.split("/")[1];
            const id = req.url.split("/")[2];
            let message = await new Controller().delete(table,id);
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ message }));
        } catch (error) {
            res.writeHead(404, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ message: error }));
        }
    }

    // : UPDATE
    else if (req.url.match(/([a-z]+)\/([0-9]+)/) && req.method === "PUT") {
        try {
            const table = req.url.split("/")[1];
            const id = req.url.split("/")[2];
            const data = await getReqData(req);
            let updated_todo = await new Controller().update(JSON.parse(data),table,id);
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify(updated_todo));
        } catch (error) {
            res.writeHead(404, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ message: error }));
        }
    }

    // : POST
    else if (req.url.match(/([a-z]+)/) && req.method === "POST") {
        const table = req.url.split("/")[1];
        let todo_data = await getReqData(req);
        let todo = await new Controller().create(table,JSON.parse(todo_data));
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(todo));
    }

    // No route present
    else {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Route not found" }));
    }
});

server.listen(PORT, () => {
    console.log(`server started on port: ${PORT}`);
});