const express = require('express')
const app = express()
require('dotenv').config();

app.listen(process.env.SERVER_PORT ,()=>{
    console.log(`Listening on ${process.env.SERVER_PORT}`)
})
