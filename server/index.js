const express = require('express')
const cors = require('cors')
const router = require('./routes')
const Sequelize = require('sequelize')
const fileUpload = require('express-fileupload')
const path = require('path')

const sequelize = require("./db/db")
const models = require('./db/models')

const PORT = process.env.PORT || 3001

const app = express()
app.use(cors())
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
app.use('/', router)

const start = async () => {
  try {
      await sequelize.authenticate()
      await sequelize.sync()
      app.listen(PORT, () => console.log(`server started ${PORT}`))
  } catch(e) {

  }
}

start()