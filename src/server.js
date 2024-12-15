require('dotenv').config()
const express = require('express')
const configViewEngine = require('./config/viewEngine')
const webRoutes = require('./routes/web')
const apiRoutes = require('./routes/api')
const cors = require('cors')

const app = express()
const port = process.env.PORT || 3000

// config req.body
app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use(cors())
/*
app.use(cors({
    origin: "http://localhost:3000/"
}))*/
    

// EJS template config
configViewEngine(app)

// declare route
app.use('/', webRoutes)
app.use('/api', apiRoutes)


app.listen(port, () => {
    console.log(`Blog app listening on port ${port}`);
})