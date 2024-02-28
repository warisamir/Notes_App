const express=require('express');
const app=express();
var bodyparser=require('body-parser');
const mongoose=require('mongoose');
var cors = require('cors');
app.use(cors());
app.listen(5000,()=>{
    console.log(`Server is listening on port ${5000}`);
});

app.use(express.json());
app.use(bodyparser.json());
app.connect("mongodb+srv://warisamir1918:waris1918@cluster0.zji50e8.mongodb.net/notes?retryWrites=true&w=majority&appName=Cluster0");
app.use(express.urlencoded({extended:true}));
app.use()