import express from "express";
const app = express();
import bookRoute from "./routes/bookRoutes";
import "./Connections/connect";
app.use(express,json())
app.use("/api/v1",bookRoute);
app.listen(1000,()=>{
    console.log("Server Started Successfully");
});
