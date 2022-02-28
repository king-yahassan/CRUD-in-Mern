const express = require("express") ;
const cors = require("cors")

require ("dotenv").config({path : "./config/.env"})
require("./config/db")

//notre app
const app =express() ;

//midlleswares
app.use(cors());
app.use(express.json())
//routes
app.use('/api' , require("./routes/routes"))
//le port 
port = process.env.PORT || 5000 ;

//Running
app.listen(port , () =>{
    console.log(`server is running on port : ${port}`);
});