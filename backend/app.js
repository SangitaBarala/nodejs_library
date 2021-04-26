const express = require('express')
const app = express()
const PORT = 5000

const bodyParser = require('body-parser')
app.use(bodyParser.json())

// import and use author's routes
const authorRoutes = require('./routes/authorRoutes')
app.use('/api/author', authorRoutes)

// import and use book routes
const bookRoutes = require('./routes/bookRoutes')
app.use('/api/books', bookRoutes)

app.listen(PORT, ()=> console.log("App is running on http://localhost:5000"))