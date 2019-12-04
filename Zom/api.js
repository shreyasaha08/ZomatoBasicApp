const express = require("express")
const app = express.Router()

app.get("/restaurants",(req,res)  => {
res.send(restaurants)
})

const restaurants = [
    {
        Name:"Pure Punjabi",
        Id:1,
        Rating: 4.0,
        Cuisine:"Indian",
        Address:"Neeladri nagar"

    },
    {
        Name:"Burger King",
        Id:2,
        Rating: 4.5,
        Cuisine:"Mexican",
        Address:"Neeladri nagar"
    },
    {
    Name:"Kitchens",
        Id:3,
        Rating: 4.2,
        Cuisine:"Indian,Mughlai",
        Address:"Neeladri nagar"
    },
    {
        Name:"Eat Fit",
        Id:1,
        Rating: 3.8,
        Cuisine:"Indian,Continental",
        Address:"Neeladri nagar"
    }

]

module.exports = app;