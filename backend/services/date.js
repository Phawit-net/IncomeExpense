const passport = require("passport");


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

    app.get('/date',passport.authenticate("jwt", { session: false }) , (req, res) => {
        db.date.findAll({
            where: { user_id: req.user.id },
            attributes: ['published_date','id','user_id'],
            order: [['published_date', 'DESC']],
            include: [{
                model: db.order,
                include: [{
                    model: db.account,
                    required: true,
                    raw: true,
                    attributes: ['name'],
                }, {
                    model: db.category,
                    required: true,
                    raw: true,
                    attributes: ['name'],
                    include: [{
                        model: db.type,
                        required: true,
                        raw: true,
                        attributes: ['name']
                    }]
                }]
            }],
        })
            .then(result => {
                res.status(200).json(result)
            })
            .catch(error => {
                res.status(400).json({ message: error.message })
            })
    })

    app.get('/dateId/:date',passport.authenticate("jwt", { session: false }) , (req, res) => {
        db.date.findAll({
            where: {
                user_id: req.user.id,
                published_date: req.params.date
            },
            attributes: ['id']
        })
            .then(result => {
                res.status(200).json(result)
            })
            .catch(error => {
                res.status(400).json({ message: error.message })
            })
    })

    app.get('/dateEmpty/:empty', (req, res) => {
        db.date.findAll({
            where: {
                id: req.params.empty
            },
            attributes: ['published_date','id'],
            include: [{
                model: db.order
            }],
        })
            .then(result => {
                res.status(200).json(result)
            })
            .catch(error => {
                res.status(400).json({ message: error.message })
            })
    })

   

    app.post('/addDate',passport.authenticate("jwt", { session: false }) , (req, res) => {
        db.date.create({
            published_date: req.body.published_date,
            user_id:req.user.id
        })
            .then(result => {
                res.status(200).json(result)
            })
            .catch(error => {
                res.status(400).json({ message: error.message })
            })
    })

    app.delete('/deleteDate/:id', (req, res) => {
        db.date.destroy({
            where: { id: req.params.id }
        })
            .then(result => {
                res.status(200).json(result)
            })
            .catch(error => {
                res.status(400).json({ message: error.message })
            })
    })

    app.get('/editDate/:dateid/:orderid', (req, res) => {
        db.date.findAll({
            where: {
                id: req.params.dateid
            },
            attributes: ['published_date','id'],
            order: [['published_date', 'DESC']],
            include: [{
                model: db.order,
                where: {
                    id: req.params.orderid
                },
                include: [{
                    model: db.account,
                    required: true,
                    raw: true,
                    attributes: ['name'],
                }, {
                    model: db.category,
                    required: true,
                    raw: true,
                    attributes: ['name'],
                    include: [{
                        model: db.type,
                        required: true,
                        raw: true,
                        attributes: ['name']
                    }]
                }]
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