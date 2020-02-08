const express=require("express");
var bodyParser = require('body-parser')//defining the bodyparser
const app=express();
var jsonParser = bodyParser.json();
app.use(bodyParser.urlencoded({extended:false}));//mandatory line
app.use(jsonParser);//mandatory line
app.set("view engine","twig");
app.set("views","./public/views");
app.get("/",(req,res)=>{
    res.render("index",{title:"Login page",message:"Hello world"});//simple twig program
 })
app.post("/",(req,res)=>{
    res.render("form",{title:"User's page",name:req.body.name,password:req.body.password});
})
app.listen(3000);