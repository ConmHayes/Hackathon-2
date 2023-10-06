const express = require('express')
const cors = require('cors')
const logger = require('./middleware/logger')
const app = express()


//imported routes
const diaryRouter = require('./routers/diary.js')

//middlesware
app.use(express.json())
app.use(cors())
app.use(logger)

app.use('/diary', diaryRouter)

module.exports = app