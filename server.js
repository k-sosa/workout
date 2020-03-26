const express = require("express");
const mongoose = require("mongoose");

const app = express()

const PORT = process.env.PORT || 3000;

app.use(express.static("public"));

app.use(express.urlencoded({extended: true}))
app.use(express.json())

const htmlRoutes = require("./routes/htmlroutes")
const apiRoutes = require("./routes/apiroutes")