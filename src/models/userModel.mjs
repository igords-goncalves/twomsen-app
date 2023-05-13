import { connection } from "../database.mjs";

/**
 * Represents the table of database.
 * @class UserModel
 */
export class UserModel {
    constructor() {}

    findAll() {
        connection.connect((err) => {
            if (err) throw err;

            connection.query("SELECT * FROM users", (err, result) => {
                if (err) throw err;
                console.table(result);
                return result;
            });
        });
    }

    findById(id) {
        connection.connect((err) => {
            if (err) throw err;

            connection.query(
                `SELECT * FROM users WHERE id = ${id}`,
                (err, result) => {
                    if (err) throw err;
                    console.table(result);
                    return result;
                }
            );
        });
    }
    
    create(data) {
        const {name, email, post} = data

        connection.connect((err) => {
            if (err) throw err;

            connection.query(
                `INSERT INTO users (name, email, post) VALUES ('${name}', '${email}', '${post}')`,
                (result, err) => {
                    if(err) throw err
                    console.log('Succes')
                    return result;
                }
            );
        });
    }
}
