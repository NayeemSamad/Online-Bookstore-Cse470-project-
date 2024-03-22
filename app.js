const express = require("express")
const app = express();

app.get("/", (req,res)=>{
    res.send("Hello Homepage");
});
app.get("/services", (req,res)=>{
    res.send("Service page");
});
app.get("/about", (req,res)=>{
    res.send("about page");
});
app.listen(1000,()=>{
    console.log("Server Started Successfully");
});
