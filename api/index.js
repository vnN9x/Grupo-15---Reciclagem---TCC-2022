const express = require("express");
const app = express();
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const townRoute = require("./routes/town");
const placeRoute = require("./routes/place");
const materialRoute = require("./routes/material");

dotenv.config();
app.use(express.json());

mongoose.connect(process.env.MONGO_URL).then(console.log('Connected to MongoDB')).catch((err) => console.log(err));

app.use("/test", (req,res)=>{
    console.log("teste ok!")
});

app.use("/town", townRoute);
app.use("/material", materialRoute);
app.use("/place", placeRoute);

app.listen(process.env.PORT || "5000", () => {
    console.log("Backend funcionando")
});