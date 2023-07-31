// Esse arquivo é somente para conecção

const mysql = require("mysql");

/**
 * Simple connection but with no exported modules
 * @see https://www.w3schools.com/nodejs/nodejs_mysql.asp
 */
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "twomsenapp",
});

module.exports = connection