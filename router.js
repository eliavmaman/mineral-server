const express = require('express');
const router = express.Router();

const familyService = require('./services/family');
const productService = require('./services/product');
const familyProductService = require('./services/familyProduct');
const classificationService = require('./services/classification');
const applicationsService = require('./services/application');

const cors = require('cors');

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

// classification
router.route('/classification').post(classificationService.create);
router.route('/classification').get(classificationService.list);
router.route('/classification/:id').get(classificationService.byId);
router.route('/classification/:id').put(classificationService.update);
router.route('/classification/:id').delete(classificationService.delete);

//applications
router.route('/applications').post(applicationsService.create);
router.route('/applications').get(applicationsService.list);
router.route('/applications/:id').get(applicationsService.byId);
router.route('/applications/:id').put(applicationsService.update);
router.route('/applications/:id').delete(applicationsService.delete);

// FamilyProduct
router.route('/familyProduct').post(familyProductService.create);
router.route('/familyProduct').get(familyProductService.list);
router.route('/familyProduct/:id').get(familyProductService.byId);
router.route('/familyProduct/:id').put(familyProductService.update);
router.route('/familyProduct/:id').delete(familyProductService.delete);


module.exports = router;