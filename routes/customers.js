const express = require('express');

const {
  getCustomers,
  createCustomer,
  updateCustomer,
  deleteCustomer,
}=require( '../controllers/customerController.js');

const auth = require('../middleware/auth.js');

const router = express.Router();

router.get('/', auth, getCustomers);
router.post('/', auth, createCustomer);
router.put('/:id', auth, updateCustomer);
router.delete('/:id', auth, deleteCustomer);

module.exports = router;
