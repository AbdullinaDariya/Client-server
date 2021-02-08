var cors = require('cors')
const express = require('express')
const app = express()
const port = 3000
app.use(cors())
app.get('/hello', (request, response) => {
    var name = "anyone"
    if (typeof request.query.name!=="undefined"){
        name=request.query.name
    } 
    response.json({"message":"Hello "+name+"!"});
})
app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log(`server is listening on ${port}`)
})