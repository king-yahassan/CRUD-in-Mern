const express = require("express") ;
const cors = require("cors")

require ("dotenv").config({path : "./config/.env"})
require("./config/db")


const app =express() ;

app.use(cors());
app.use(express.json())

app.use('/api' , require("./routes/routes"))

port = process.env.PORT || 5000 ;

app.listen(port , () =>{
    console.log(`server is running on port : ${port}`);
});