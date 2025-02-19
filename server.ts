import express from "express";
import multer from "multer";
import path from "path";
import fieldRoutes from "./routes/Field-routes"
import cropRoutes from "./routes/Crop-routes";
import staffRoutes from "./routes/Staff-routes";

const app = express();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

app.use(express.json());

app.use("/Field",fieldRoutes(upload));
app.use("/Crop",cropRoutes(upload));
app.use("/Staff",staffRoutes)

app.listen(3002,(err=>{
    console.log("server port 3002");
}))