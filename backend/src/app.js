const express = require("express") ; 
const morgan = require("morgan") 
const cors = require("cors") ; 
const AuthRouter = require("../routers/index.routes");


// server 

const app = express() ; 

// middleware 
app.use(cors()) ; 
app.use(morgan("dev")) ; 
app.use(express.json()) ; 
app.use(express.urlencoded({extended : false }))

// routes 

app.use("/api/v1/auth",AuthRouter) ; 

module.exports = app ; 