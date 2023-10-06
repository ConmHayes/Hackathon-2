const { Router } = require("express")
const homeUserRouter = Router()
const diaryController = require("../controllers/diary.js")
const path = require("path")


homeUserRouter.get("/", (req, res) => {
    const filePath = path.join(__dirname, "../../client/public/home.html")
    res.sendFile(filePath)
})

homeUserRouter.post("/", diaryController.createNewEntry)

module.exports = homeUserRouter