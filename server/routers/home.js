const { Router } = require("express")
const homeRouter = Router()
const logInController = require("../controllers/log_in.js")
const path = require("path")

homeRouter.get("/", (req, res) => {
    const filePath = path.join(__dirname, "../../client/public/index.html")
    res.sendFile(filePath)
})

homeRouter.post("/", logInController.logIn)

module.exports = homeRouter