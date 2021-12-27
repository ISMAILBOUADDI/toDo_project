const con = require('../DB/connection')


con.connect(function (err) {
    if (err) throw {err: err,message: "Error connecting to database"};
    console.log("Connected!");
  });
  
  module.exports = fetcher = {
    //Queries.getFlights()
    get: (query) => {
      return new Promise((resolve, reject) => {
        con.query(query, function (err, result) {
          if (err) throw err;
          resolve(result);
        });
      });
    },
    post: (query) => {
      return new Promise((resolve, reject) => {
        con.query(query, function (err, result) {
          if (err) throw err;
          resolve(result);
        });
      });
    }
  };