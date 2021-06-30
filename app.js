require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const cors = require('cors')
const routes = require('./routes')

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors({
  // 'allowedHeaders': ['sessionId', 'Content-Type'],
  // 'exposedHeaders': ['sessionId'],
  // 'origin': '*',
  // 'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
  // 'preflightContinue': false
}));

app.use('/', routes)

app.listen(port, () => {
  console.log(`Aniplay App listening at http://localhost:${port}`)
})
