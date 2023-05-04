const http= require('http')

const server = http.createServer((req,res) => {
    console.log(req.url)
})

server.listen(3030, () => {
    console.log('Server started on port 3000')
})


// const express = require ("express")

// const app = express()

// app.listen(3000, ()=> {
//     console.log ("server run on port 3000")
// })