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

    app.post('/addOrder', (req, res) => {
        db.order.create({
            account_id: req.body.account_id,
            category_id: req.body.category_id,
            amount: req.body.amount,
            description: req.body.description,
            date_id: req.body.date_id,
        })
            .then(result => {
                res.status(200).json(result)
            })
            .catch(error => {
                res.status(400).json({ message: error.message })
            })
    })

    app.delete('/deleteOrder/:id', (req, res) => {
        db.order.destroy({
            where: { id: req.params.id }
        })
            .then(result => {
                res.status(200).json(result)
            })
            .catch(error => {
                res.status(400).json({ message: error.message })
            })
    })
}