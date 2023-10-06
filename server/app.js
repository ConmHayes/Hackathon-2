const express = require('express')
const cors = require('cors')
const logger = require('./middleware/logger')
const app = express()

const path = require("path")

//middlesware
app.use(express.json())
app.use(cors())
app.use(logger)

// Serving static HTML files
app.use(express.static(path.join(__dirname, "../client/public")))

//imported routes
const diaryRouter = require('./routers/diary.js')
const homeRouter = require("./routers/home.js")
const homeUserRouter = require("./routers/homeUser.js")

app.use('/diary', diaryRouter)
app.use("/", homeRouter)
app.use("/home", homeUserRouter)

module.exports = app