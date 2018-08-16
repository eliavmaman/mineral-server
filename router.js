const express = require('express');
const router = express.Router();

const familyService = require('./services/family');
const productService = require('./services/product');
const familyProductService = require('./services/familyProduct');
const usageService = require('./services/usage');

const cors=require('cors');

router.all('*', cors());


// Family
router.route('/family').post(familyService.create);
router.route('/family').get(familyService.list);
router.route('/family/:id').get(familyService.byId);
router.route('/family/:id').put(familyService.update);
router.route('/family/:id').delete(familyService.delete);

// products
router.route('/products').post(productService.create);

router.route('/products').get(productService.list);
router.route('/products/:id').get(productService.byId);
router.route('/products/:id').put(productService.update);

// Family
router.route('/usages').post(usageService.create);
router.route('/usages').get(usageService.list);
router.route('/usages/:id').get(usageService.byId);
router.route('/usages/:id').put(usageService.update);
router.route('/usages/:id').delete(usageService.delete);


// FamilyProduct
router.route('/familyProduct').post(familyProductService.create);
router.route('/familyProduct').get(familyProductService.list);
router.route('/familyProduct/:id').get(familyProductService.byId);
router.route('/familyProduct/:id').put(familyProductService.update);
router.route('/familyProduct/:id').delete(familyProductService.delete);


module.exports = router;