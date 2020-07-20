
import * as express from "express";
import * as bodyParser from "body-parser";
import { CommonFunctions } from "./utils/lib";

const commonUtil = new CommonFunctions();
let app = express();

type User = {
    id: string,
    login : string,
    password: string,
    age: number,
    isDeleted: boolean
};

let data: User[] = [];
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/users/:id', function (req, res) {
    const user = data.filter((ele) => !ele.isDeleted && ele.id == req.params["id"])
    user.length>0 ? res.send(user): res.send("No user found");
});

app.get('/users', function (req, res) {
    const users = req.query["search"] ? commonUtil.getAutoSuggestUsers(req.query["search"],data) : commonUtil.getUsers(data);
    users.length>0 ? res.send(users): res.send("No user found");
});

app.post('/add-user', function (req, res) {
    data.push(commonUtil.addUser(req.body));
    res.send('User added successfully');
});

app.put('/users/:id', function (req, res) {
    commonUtil.updateUser(req.params["id"],req.body,data);
    res.send('User updated successfully');
});

app.delete('/users/:id', function (req, res) {
    commonUtil.markDeleted(req.params["id"],data);
    res.send('User deleted successfully');
});
  
app.listen(3000)