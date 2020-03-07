module.exports = (app, db) => {
    app.get('/types', (req, res) => {
        db.type.findAll()
            .then(result => {
                res.status(200).json(result)
            })
            .catch(error => {
                res.status(400).json({ message: error.message })
            })
    })
}