const path = require("path")

function htmlRoutes(app) {
    app.get("/", (req, res)=> {
        console.log(__dirname, "../public/index.html")
        res.sendFile(path.join(__dirname, "../public/index.html"))
    })
    app.get("/exercise", (req, res) => {
        console.log(__dirname, "../public/exercise.html")
        res.sendFile(path.join(__dirname, "../public/exercise.html"))
    })
    app.get("/stats", (req, res) => {
        console.log(__dirname, "../public/stats.html")
        res.sendFile(path.join(__dirname, "../public/stats.html"))
    })
}

module.exports = htmlRoutes