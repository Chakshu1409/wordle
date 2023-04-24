const PORT = 8000
const axios = require("axios").default
const express = require("express")
const cors = require("cors")
const bodyParser= require("body-parser")

const app = express()

app.use(cors())

app.use(bodyParser.json({ extended:true }))
app.use(bodyParser.urlencoded({ extended: true }))


app.get('/word', (req, res) => {
    const options = {
        method: 'GET',
        url: 'https://random-words5.p.rapidapi.com/getMultipleRandom',
        params: {count: '1', wordLength: '5'},
        headers: {
            'x-rapidapi-host': 'random-words5.p.rapidapi.com',
            'x-rapidapi-key': 'f55a2b6f38mshc9f123d5c833407p1bf77djsnf3fa6f511ae9'
        }
    }
    axios.request(options).then((response) => {
        console.log(response.data)
        res.json(response.data[0])
    }).catch((error) => {
        console.error(error)
    })
})
app.listen(PORT, () => console.log('Server running on port ' + PORT))