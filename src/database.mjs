// Esse arquivo é somente para conecção

import mysql from "mysql";

/**
 * Simple connection but with no exported modules
 * @see https://www.w3schools.com/nodejs/nodejs_mysql.asp
 */
export const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "twomsenapp",
});
