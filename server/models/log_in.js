const db = require('../database/connect');

class LogIn {

    constructor({ id, user_id, username, password }) {
        this.id = id
        this.user_id = user_id;
        this.username = username;
        this.password = password;
    }

    // static async getOneById(id) {
    //     const response = await db.query("SELECT * FROM log_in WHERE user_id = $1", [id]);
    //     if (response.rows.length != 1) {
    //         throw new Error("Unable to locate user.");
    //     }
    //     return new User(response.rows[0]);
    // }

    static async getOneByUsername(username) {
        const response = await db.query("SELECT * FROM log_in WHERE username = $1", [username]);
        if (response.rows.length != 1) {
            throw new Error("Username does not exist");
        }
        return new LogIn(response.rows[0]);
    }

    // static async create(data) {
    //     const { username, password } = data;
    //     let response = await db.query("INSERT INTO log_in (username, password) VALUES ($1, $2) RETURNING user_id;",
    //         [username, password]);
    //     const newId = response.rows[0].user_id;
    //     const newUser = await User.getOneById(newId);
    //     return newUser;
    // }
}

module.exports = LogIn;