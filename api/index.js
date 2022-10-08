const express = require("express");
const app = express();

app.use("/test", (req,res)=>{
    console.log("teste ok!")
});

app.listen("5000", () => {
    console.log("Backend funcionando")
});