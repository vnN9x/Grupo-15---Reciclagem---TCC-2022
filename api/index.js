const express = require("express");
const app = express();
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const townRoute = require("./routes/town");

dotenv.config();
app.use(express.json());

mongoose.connect(process.env.MONGO_URL).then(console.log('Connected to MongoDB')).catch((err) => console.log(err));

app.use("/test", (req,res)=>{
    console.log("teste ok!")
});

app.use("/api/town", townRoute);

app.listen("5000", () => {
    console.log("Backend funcionando")
});