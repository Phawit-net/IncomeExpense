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
}