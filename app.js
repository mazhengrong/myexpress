const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World!'))

//app.post('/', (req, res) => res.send('Got a post request'))

//app.put('/user', (req, res) => res.send('Got a put request at/user'))

//app.delete('/usesr', (req, res) => res.send('Got a delete request at/user'))


app.listen(3000, () => console.log('Example app listening on port 3000!'))