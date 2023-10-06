// ! Import relevant modules 

require("dotenv").config()
const app = require("./app")
const port = process.env.PORT

// ! Turn on the server

app.listen(port, () => {
    console.log(`API listening on port ${port}`)
});