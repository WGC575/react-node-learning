const express = require('express')
const app = express()
app.use(express.json())
app.get('/', function(req, res){
    res.send("It's working!")
})

app.listen(3000, () => {
    console.log('app listening on port 3000')
})