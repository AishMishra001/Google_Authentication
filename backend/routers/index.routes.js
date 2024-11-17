const express = require("express") 
const AuthRouter = express.Router() ; 


AuthRouter.route("/login-with-google").get((req,res)=>{
      res.status(200).send({
        message : "Hare krishna" 
      })
})

module.exports =  AuthRouter ; 