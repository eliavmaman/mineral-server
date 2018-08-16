const Family = require('../models/family');

module.exports = {
    create: (req, res) => {
        let family = req.body;
        let c = new Family(family);

        c.save((err, family) => {
            if (err) throw err;
            res.json(family);
        });
    },
    list: (req, res) => {
        Family.find({'active':true},(err, famlies) => {
            if (err) throw err;
            res.json(famlies);
        });
    },
    byId: (req, res) => {
        let catId = req.params.id;
        console.log(catId);
        Family.findOne({_id: catId}, (err, family) => {
            if (err) throw err;
            res.json(family);
        });
    },
    update: (req, res) => {
        let famId = req.params.id;
        let family = req.body;

        console.log(family);

        Family.findOne({_id: famId}, (err, c) => {
            if (err) throw err;

            c.name = family.name;

            c.save((err, newFamily) => {
                if (err) throw err;

                res.json(newFamily);
            });
        });

    },
    delete: (req, res) => {
        let famId = req.params.id;

        Family.findOne({_id: famId}, (err, c) => {
            if (err) throw err;

            c.active = false;

            c.save((err, newF) => {
                if (err) throw err;

                res.json(newF);
            });
        });

    }


};