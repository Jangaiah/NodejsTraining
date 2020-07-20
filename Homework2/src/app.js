"use strict";
exports.__esModule = true;
var express = require("express");
var bodyParser = require("body-parser");
var lib_1 = require("./utils/lib");
var commonUtil = new lib_1.CommonFunctions();
var app = express();
var data = [];
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/users/:id', function (req, res) {
    var user = data.filter(function (ele) { return !ele.isDeleted && ele.id == req.params["id"]; });
    user.length > 0 ? res.send(user) : res.send("No user found");
});
app.get('/users', function (req, res) {
    var users = req.query["search"] ? commonUtil.getAutoSuggestUsers(req.query["search"], data) : commonUtil.getUsers(data);
    users.length > 0 ? res.send(users) : res.send("No user found");
});
app.post('/add-user', function (req, res) {
    data.push(commonUtil.addUser(req.body));
    res.send('User added successfully');
});
app.put('/users/:id', function (req, res) {
    commonUtil.updateUser(req.params["id"], req.body, data);
    // res.send('User updated successfully');
    console.log(req.body, data);
    res.send(data);
});
app["delete"]('/users/:id', function (req, res) {
    commonUtil.markDeleted(req.params["id"], data);
    res.send('User deleted successfully');
});
app.listen(3000);
