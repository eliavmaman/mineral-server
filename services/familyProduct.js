const FamilyProduct = require('../models/familyProduct');

module.exports = {
    create: (req, res) => {
        let familyProduct = req.body;
        let p = new FamilyProduct(familyProduct);

        p.save((err, familyProduct) => {
            if (err) throw err;

            res.json(familyProduct);
        });
    },
    list: (req, res) => {
        FamilyProduct.find().populate('product family').exec((err, familyProducts) => {
            if (err) throw err;

            res.json(familyProducts);
        });
    },

    byId: (req, res) => {
        let pId = req.params.id;

        FamilyProduct.findOne({_id: pId}).populate('product family').exec((err, familyProduct) => {
            if (err) throw err;

            res.json(familyProduct);
        });
    },
    update: (req, res) => {
        let pId = req.params.id;
        let fp = req.body;

        FamilyProduct.findOne({_id: pId}, (err, o) => {
            if (err) throw err;

            o.product = fp.product;
            o.family= fp.family;

            o.save((err, newFamilyProduct) => {
                if (err) throw err;

                res.json(newFamilyProduct);
            });

        });
    },
    delete: (req, res) => {
        let famId = req.params.id;

        FamilyProduct.findOne({_id: famId}, (err, c) => {
            if (err) throw err;

            c.active = false;

            c.save((err, newF) => {
                if (err) throw err;

                res.json(newF);
            });
        });

    }

};