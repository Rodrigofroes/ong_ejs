const express = require('express');
const expressEjsLayout = require('express-ejs-layouts');
let homeRoute = require('./routes/homeRoute')
const app = express();

app.set("views", "./views");
app.set("view engine", "ejs");
app.set("layout", "./layout");

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static("public"))
app.use(expressEjsLayout);

app.use('/', homeRoute);

app.listen(5000, ()=>{
    console.log("Serv iniciado");
});