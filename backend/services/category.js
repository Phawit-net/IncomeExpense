module.exports = (app, db) => {
  app.get('/categories', (req, res) => {
    db.category.findAll()
      .then(result => {
        res.status(200).json(result)
      })
      .catch(error => {
        res.status(400).json({ message: error.message })
      })
  })

  app.get('/category/:type', (req, res) => {
    db.category.findAll({
      attributes: ['id', 'name'],
      raw: true,
      include: [{
        model: db.type,
        attributes: ['name'],
        where: {
          name: req.params.type
        }
      }],
    })
      .then(result => {
        res.status(200).json(result)
      })
      .catch(error => {
        res.status(400).json({ message: error.message })
      })
  })
}