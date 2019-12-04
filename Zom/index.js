const express = require("express")
const cors = require("cors")
const api = require('./api')
const bodyParser = require("body-parser")
//const grapqlHTTP = require("express-graphql")
//const { buildSchema } = require('graphql')

const app = express()
app.use(cors() )
//app.use(bodyParser.urlencoded({ extended: false }))
 
// // parse application/json
//app.use(bodyParser.json())
app.use("/",api)
app.listen(3000,(req,res) =>{
    console.log("response reveived by client")
})