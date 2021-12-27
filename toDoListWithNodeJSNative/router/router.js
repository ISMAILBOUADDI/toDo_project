
var ejs = require('ejs');
const fs = require('fs');

const fetcher = require('../Helpers/fetcher')
const Queries = require('../Queries/index')
const Mutations = require("../Mutations");
const path = require('path')

const formidable = require('formidable');


module.exports = routes = {
    assets: function (data, res) {
        // for statis files (css, img,...)
        let assets = fs.readFileSync(path.join(__dirname + "/.." + data.url));
        res.writeHead(200);
        res.write(assets);
        res.end("\n");
    },
    submit: function (data, res, req) {
        // parsing form data
        let form = new formidable.IncomingForm();

        form.parse(req, async function (err, fields, files) {
            //handle errors
            if (err) {
                console.error(err);
                return;
            }
            let obj;
            obj = { fields: fields, files: files }
  
             var dataObj = Object.assign({},obj.fields);
                // insert into Task
                let Task = await fetcher.post(Mutations.addTask(dataObj.Ttask, dataObj.date,dataObj.description,dataObj.priority))
              
                ejs.renderFile('./views/index.ejs', { data: dataObj }, async function (err, str) {
                    res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
                    if (err) {
                        console.log(err)
                        res.end();
                    }
                });
        })
    },

    index: async function (data, res) {
      
        ejs.renderFile('./views/index.ejs', function (err, str) {
            res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
            if (err) {
                console.log(err)
                res.end();
            } else {
                res.end(str);
            }
        });
    },
    404: function (data, res) {
        let html = ejs.render(fs.readFileSync("./views/404.ejs", "utf8"));
        res.writeHead(200);
        res.write(html);
        res.end("\n");
    }
}