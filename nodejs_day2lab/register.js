const express = require('express');
const bodyParser = require("body-parser");
let app = express();

app.set("view-engine","ejs");
app.use(bodyParser.urlencoded({ extended: true }));

let msg,pass;


app.get('/register', function(req, res) {
    res.render("index.ejs", {msg, pass});
});

app.post('/register', function(req, res) {
    pass = req.body.password;
    if (pass.length < 8) {
        msg = "password should be more than 8 characters!";
    } else {
        msg = "Registration success";
    }
    res.render('index.ejs', {msg, pass});
})

app.listen(8080);