import express from "express";
import fieldRoutes from "./routes/Field-routes";

const app = express();

app.use(express.json());

app.use("/Field",fieldRoutes);

app.listen(3002,(err=>{
    console.log("server port 3002");
}))