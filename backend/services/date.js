module.exports = (app, db) => {
    app.get('/dates', (req, res) => {
        db.date.findAll()
            .then(result => {
                res.status(200).json(result)
            })
            .catch(error => {
                res.status(400).json({ message: error.message })
            })
    })
}