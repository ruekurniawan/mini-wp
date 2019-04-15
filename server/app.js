require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
const indexRoutes = require('./routes/index.js')
const morgan = require('morgan')

const mongoose = require('mongoose')
const dbUrl = 'mongodb://localhost:/miniWp'
mongoose.connect(dbUrl, ({ useNewUrlParser: true }))

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(cors())
app.use(morgan('tiny'))
app.use('/', indexRoutes)

app.listen(port, () => {
  console.log(`Running in port ${port}`)
})
