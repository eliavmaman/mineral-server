const Classification = require('../models/classification');

module.exports = {
    create: (req, res) => {
        let classification = req.body;
        let c = new Classification(classification);

        c.save((err, classification) => {
            if (err) throw err;
            res.json(classification);
        });
    },
    list: (req, res) => {
        Classification.find({'active':true},(err, list) => {
            if (err) throw err;
            res.json(list);
        });
    },
    byId: (req, res) => {
        let id = req.params.id;
        console.log(catId);
        Classification.findOne({_id: id}, (err, classification) => {
            if (err) throw err;
            res.json(classification);
        });
    },
    update: (req, res) => {
        let id = req.params.id;
        let classification = req.body;

        console.log(classification);

        Classification.findOne({_id: id}, (err, c) => {
            if (err) throw err;

            c.name = classification.name;

            c.save((err, newClassification) => {
                if (err) throw err;

                res.json(newClassification);
            });
        });

    },
    delete: (req, res) => {
        let id = req.params.id;

        Classification.findOne({_id: id}, (err, c) => {
            if (err) throw err;

            c.active = false;

            c.save((err, deleted) => {
                if (err) throw err;

                res.json(deleted);
            });
        });

    }


};