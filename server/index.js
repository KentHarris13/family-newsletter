const express = require('express')
const cors = require('cors')


const app = express()

app.use(express.json())
app.use(cors())

const {
    getnewsletter,
    deletenewletter,
    createnewsletter,
    updatenewsletter
} = require('./homeCtrl')

app.get(`/api/newsletter`, getnewsletter)
app.delete(`/api/newsletter/:id`, deletenewsletter)
app.post(`/api/newsletter`, createnewsletter)
app.put(`/api/newsletter/:id`, updatenewsletter)



const port = 4200

app.listen(port, console.log(`We have our headding to ${port}!`))