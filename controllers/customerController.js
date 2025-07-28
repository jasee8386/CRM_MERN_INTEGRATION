const Customer =require('../models/Customer.js') 

exports. getCustomers = async (req, res) => {
  const customers = await Customer.find({ userId: req.userId });
  res.json(customers);
};

exports. createCustomer = async (req, res) => {
  const customer = new Customer({ ...req.body, userId: req.userId });
  await customer.save();
  res.status(201).json(customer);
};

exports. updateCustomer = async (req, res) => {
  const customer = await Customer.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(customer);
};

exports. deleteCustomer = async (req, res) => {
  await Customer.findByIdAndDelete(req.params.id);
  res.json({ message: 'Customer deleted' });
};
