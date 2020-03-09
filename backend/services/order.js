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

    app.get('/order', (req, res) => {
        db.order.findAll({
            attributes: ['id','description','amount','account.name'],
            raw: true,
            include: [{
                model: db.account,
                attributes: ['name'],
            }]
            // }, {
            //     model: db.category,
            //     attributes: ['name'],
            //     include: [{
            //         model: db.type,
            //         attributes: ['name']
            //     }]
            // },{
            //     model: db.date,
            // }],
            // include:[{
            //     model: db.category,
            //     attributes: ['name'],
            //     include:[{
            //         model: db.type,
            //         attributes: ['name']

            //     }]
            // }]
        })
            .then(result => {
                res.status(200).json(result)
            })
            .catch(error => {
                res.status(400).json({ message: error.message })
            })
    })
}