const express = require("express");
const app = express();

app.get("/index.html",function(req,res){
    res.send("<h1>welcome</h1>")
    // res.sendFile('C:/Users/ahmed/OneDrive/Desktop/ITI/NodeJS/Day1/NodeJS_Day1/index.html')
    // had to use the absolute path ? o.O
})


app.listen(8081,function(){
    console.log("server started");
})