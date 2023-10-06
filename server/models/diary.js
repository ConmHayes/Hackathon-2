// ! Import database

const db = require("../database/connect")

// ! Create class 

class Diary{

    constructor({user_id, date, entry, category})

    {
    this.user_id = user_id
    this.date = date
    this.entry = entry
    this.category = category
    }

    static async getAll(data) {
        const response = await db.query("SELECT * FROM log_in l JOIN diary d ON l.user_id = d.user_id WHERE l.username = $1 ORDER BY date DESC", [data]) 
        if (response.rows.length === 0) {
            throw new Error("No entries available")
        }
        return response.rows.map(e => new Diary(e))

    }

    static async getOneById(id, username){
        const response = await db.query("SELECT l.user_id, d.date, d.entry, d.category FROM log_in l JOIN diary d ON l.user_id = d.user_id WHERE l.username = $1 and d.id = $2 ", [username, id]) 
        if(response.rows.length != 1){
            throw new Error ("No diary entries for this id")
        }
        return new Diary(response.rows[0]);
    }

}

module.exports = Diary
