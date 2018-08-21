const Application = require('../models/application');

module.exports = {
    create: (req, res) => {
        let app = req.body;
        let c = new Application(app);

        c.save((err, application) => {
            if (err) throw err;
            res.json(application);
        });
    },
    list: (req, res) => {
        Application.find({'active': true}).populate('product family classification').exec((err, apps) => {
            if (err) throw err;

            res.json(apps);
        });
    },
    byId: (req, res) => {
        let catId = req.params.id;
        console.log(catId);
        Application.findOne({_id: catId}, (err, application) => {
            if (err) throw err;
            res.json(application);
        });
    },
    update: (req, res) => {
        let id = req.params.id;
        let application = req.body;

        console.log(application);

        Application.findOne({_id: id}, (err, c) => {
            if (err) throw err;

            c.product = application.product;
            c.family = application.family;
            c.classification = application.classification;
            c.usage = application.usage;

            c.save((err, newApplication) => {
                if (err) throw err;

                res.json(newApplication);
            });
        });

    },
    delete: (req, res) => {
        let id = req.params.id;

        Application.findOne({_id: id}, (err, c) => {
            if (err) throw err;

            c.active = false;

            c.save((err, newA) => {
                if (err) throw err;

                res.json(newA);
            });
        });

    }


};