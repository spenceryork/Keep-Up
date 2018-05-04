"use strict";

const express = require("express");
const app = express();
const session = require("express-session");
const passport = require("passport");
const bodyParser = require("body-parser");
const routes = require("./server/routes");

app.set("models", require("./server/models"));

app.use(express.static(__dirname + "/client"));

app.use("/angular", express.static(__dirname + "/node_modules/angular/"));
app.use("/angular-route", express.static(__dirname + "/node_modules/angular-route/"));
app.use("/bootstrap", express.static(__dirname + "/node_modules/bootstrap/"));
app.use("/jquery", express.static(__dirname + "/node_modules/jquery/"));
app.use("/popper", express.static(__dirname + "/node_modules/popper.js/"));



app.use(session({
    secret: "keyboard cat",
    resave: true,
    saveUninitialized: true
    })
);

require("./server/config/passport-strat.js");
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(routes);

app.listen(3000, () => {
    console.log("server listening on port 3000");
});