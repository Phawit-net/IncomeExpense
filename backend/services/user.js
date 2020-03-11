const passport = require('passport')
const jwt = require('jsonwebtoken')
const jwtOptions = require('../config/passport/passport')

module.exports = (app, db) => {
  app.get('/users/:id', (req, res) => {
    db.user.findOne({
      where :{
        id: req.params.id
      }
    })
      .then(result => {
        res.status(200).json(result)
      })
      .catch(error => {
        res.status(400).json({ message: error.message })
      })
  })

  app.post('/registerUser', (req, res, next) => {
    passport.authenticate('register', (err, user, info) => {
      if (err) {
        console.error(err);
      }
      if (info !== undefined) {
        console.error(info.message)
        res.status(403).send(info.message)
      } else {
        user.update({
          email: req.body.email,
          role: "user"
        })
          .then(() => {
            console.log('user created in db')
            res.status(200).send({ message: 'user created' })
          })
          .catch(err => {
            console.error(err)
            res.status(400).send({ message: err.message })
          })
      }
    })(req, res, next)
  })

  app.post('/loginUser', (req, res, next) => {
    passport.authenticate('login', (err, user, info) => {
      if (err) {
        console.error(err)
      }
      if (info !== undefined) {
        if(info.message === 'username or password is incorrect.'){
          console.error(info.message)
          res.status(401).send({message : info.message})
        } else {
          console.error(info.message)
          res.status(400).send(info.message)
        }
      } else {
        db.user.findOne({
          where: {
            username: req.body.username,
          },
        }).then(user => {
          const token = jwt.sign({ id: user.id, role: user.role, email: user.email , username :user.username , avatar :user.avatar},
            jwtOptions.secretOrKey, { expiresIn: 3600 })
          res.status(200).send({
            auth: true,
            token,
            message: 'user found & logged in'
          })
        })
      }
    })(req, res, next)
  })

  app.get('/protected-route', passport.authenticate('jwt', { session: false }),
    function (req, res) {
      res.status(200).send(req.user)
    }
  )
}