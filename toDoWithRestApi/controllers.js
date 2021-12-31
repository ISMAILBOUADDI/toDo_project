const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'ismail',
    database: 'list'
});
class Controller {
    async getAll(table) {
        return new Promise((resolve, reject) => {
             connection.query(`SELECT * FROM ${table}`, function (err, result, fields) {
              if (err) {
                return reject(err);
              }
              resolve(result);
              });
        });
    }

    // getting a single 
    async get(table,id) {
        return new Promise((resolve, reject) => {
            connection.query(`SELECT * FROM ${table} where id = ${id}`, function (err, result, fields) {
             if (err) {
               return reject(err);
             }
             resolve(result);
             });
       });
    }

    // creating 
    async create(table,data) {
        return new Promise((resolve, reject) => {
            let query  
            if (table == 'task') {
                query  = `INSERT INTO task (id_project, titre, status , description, date_db, date_fn) VALUES ('${data.id_project}','${data.titre}','${data.status}','${data.description}','${data.date_db}','${data.date_fn}')`
            }else if (table == 'project') {
                query  = `INSERT INTO project (titre, priorite, description, date_db, date_fn) VALUES ('${data.titre}','${data.priorite}','${data.description}','${data.date_db}','${data.date_fn}')`
            }
            connection.query(query, function (err, result, fields) {
             if (err) {
               return reject(err);
             }
             resolve('Todo added successfully');
             });
       });
    }

   
}
module.exports = Controller;
