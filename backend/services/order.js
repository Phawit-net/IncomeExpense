module.exports = (app, db) => {
    app.get('/orders', (req, res) => {
        db.order.findAll()
            .then(result => {
                res.status(200).json(result)
            })
            .catch(error => {
                res.status(400).json({ message: error.message })
            })
    })

    app.get('/orders/:id', (req, res) => {
        db.account.findAll({
            where: {
                category_id: req.params.id
            },
            attributes: ['name', 'price', 'image', 'id']
        })
            .then(result => {
                res.status(200).json(result)
            })
            .catch(error => {
                res.status(400).json({ message: error.message })
            })
    })
}