/**
 * Represents the table of database.
 * @class UserModel
 */
class UserModel {
    constructor(dbConnection) {
        this.connection = dbConnection;
    }

    async findAll() {
        const query = "SELECT * FROM users";
        const result = await this.execute(query);
        console.table(result);
        return result;
    }

    async findById(id) {
        const query = `SELECT * FROM users WHERE id = ${id}`;
        const result = await this.execute(query);
        console.table(result);
        return result;
    }

    async create(data) {
        const { name, email, post } = data;
        const query = `INSERT INTO users (name, email, post) VALUES ('${name}', '${email}', '${post}')`
        const result = await this.execute(query)
        console.log("Success!")
        return result
    }

    execute(query) {
        return new Promise((resolve, reject) => {
          this.connection.query(query, (err, result) => {
            if (err) reject(err);
            resolve(result);
          });
        });
      }
}

module.exports = UserModel