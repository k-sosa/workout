const mongoose = require("mongoose")
const db = require("../models")
function apiRoutes(app) {

app.get("/api/workouts", (req, res) => {
    db.Workout.find({}).then(data => {
        res.json(data)
    })
})

app.get("/api/workouts/range", (req, res) => {
    db.Workout.find({}).then(data => {
        res.json(data)
    })
})

app.post("/api/workouts", (req, res) => {
    db.Workout.create(req.body).then(data => {
        res.json(data)
    }) 
})
app.put("/api/workouts", (req, res) => {
    let id = req.body.id
    id = mongoose.Types.ObjectId(id)
    db.Workout.findOneAndUpdate(
        { _id: id }, 
        { $push: { exercises: req.body  } },
       function (error, success) {
             if (error) {
                 console.log(error);
             } else {
                 console.log(success);
             }
             res.json(success)
         });
     
})
}

module.exports = apiRoutes