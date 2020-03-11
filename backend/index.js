const express = require('express')
const app = express()
const cors = require('cors')

const bodyParser = require('body-parser')
const db = require('./models')

const categoryService = require('./services/category')
const accountService = require('./services/account')
const typeService = require('./services/type')
const dateService = require('./services/date')
const userService = require('./services/user')
const orderService = require('./services/order')
app.use(cors())

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

db.sequelize.sync({ alter: false }).then(() => {
    categoryService(app, db)
    accountService(app, db)
    typeService(app, db)
    dateService(app,db)
    userService(app,db)
    orderService(app,db)

  app.listen(8080, () => {
    console.log("Server is running on port 8080")
  })
})