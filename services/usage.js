const Usage = require('../models/usage');

module.exports = {
    create: (req, res) => {
        let usage = req.body;
        let c = new Usage(usage);

        c.save((err, usage) => {
            if (err) throw err;
            res.json(usage);
        });
    },
    list: (req, res) => {
        Usage.find({'active':true},(err, famlies) => {
            if (err) throw err;
            res.json(famlies);
        });
    },
    byId: (req, res) => {
        let catId = req.params.id;
        console.log(catId);
        Usage.findOne({_id: catId}, (err, usage) => {
            if (err) throw err;
            res.json(usage);
        });
    },
    update: (req, res) => {
        let famId = req.params.id;
        let usage = req.body;

        console.log(usage);

        Usage.findOne({_id: famId}, (err, c) => {
            if (err) throw err;

            c.name = usage.name;

            c.save((err, newUsage) => {
                if (err) throw err;

                res.json(newUsage);
            });
        });

    },
    delete: (req, res) => {
        let famId = req.params.id;

        Usage.findOne({_id: famId}, (err, c) => {
            if (err) throw err;

            c.active = false;

            c.save((err, newF) => {
                if (err) throw err;

                res.json(newF);
            });
        });

    }


};