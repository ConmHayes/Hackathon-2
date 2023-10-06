const LogIn = require("../models/log_in.js")

const logIn = async (req, res) => {
    try {
        const { username, password } = req.body

        console.log(req.body);
        console.log(username)
        const user = await LogIn.getOneByUsername(username)

        if (password === user.password) {
            res.status(200).json({ message: "Login Successful!" })
        } else {
            throw new Error("Username and password do not match")
        }

    } catch (err) {
        res.status(401).json({ error: err.message })
    }
}

module.exports = { logIn }