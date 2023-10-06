const Diary = require("../models/diary");

async function index(req, res) {
    try {
        const data = req.params.username
        const entries = await Diary.getAll(data)
        res.status(200).json(entries)
    } catch (err) {
        res.status(404).json({ "error": err.message })
    }
}

async function oneEntry(req, res) {
    try {
        const id = req.params.id
        const username = req.params.username
        const entry = await Diary.getOneById(id, username)
        res.status(201).json(entry)
    } catch (err) {
        res.status(404).json({ "error": err.message })
    }

}

async function createNewEntry(req, res) {
    try {
        const data = req.body

        console.log(data);

        const newEntry = await Diary.create(data)
        res.status(201).json({ message: "New entry successfully created" })
    } catch (err) {
        res.status(500).json({ error: "Failed to create entry" })
    }
}


module.exports = { index, oneEntry, createNewEntry }

