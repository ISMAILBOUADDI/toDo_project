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

   
}
module.exports = Controller;
