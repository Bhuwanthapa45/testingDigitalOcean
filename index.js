const dotenv = require('dotenv')
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter', (req,res)=>{
    res.send("Hello from /twiiter route")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})