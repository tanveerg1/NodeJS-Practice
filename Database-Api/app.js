/*6 install express, body-parser and mysql in order for this application to work
	use postman to test the api
*/
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const Customer = require('./models/customer');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/',(req, res) => {
	res.send('Hello World!');
});

app.post('/customers', function(req, res, next) {
	// Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Customer
  const customer = new Customer({
    email: req.body.email,
    name: req.body.name,
    active: req.body.active
  });

  // Save Customer in the database
  Customer.create(customer, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Customer."
      });
    else res.send(data);
  });
});

// Retrieve all Customers
app.get("/customers", function(req, res, next){
	Customer.getAll((err, cust) => {
		if (err)
			res.status(500).send({
				message:
				err.message || "Some error occurred while retrieving customers."
		});
		else res.send(cust);
	});
});

// Retrieve a single Customer with customerId
app.get("/customers/:customerId", function(req, res, next){
	Customer.findById(req.params.customerId, (err, data) => {
		if (err) {
		  if (err.kind === "not_found") {
			res.status(404).send({
			  message: `Not found Customer with id ${req.params.customerId}.`
			});
		  } else {
			res.status(500).send({
			  message: "Error retrieving Customer with id " + req.params.customerId
			});
		  }
		} else res.send(data);
  });
});

// Update a Customer with customerId
app.put("/customers/:customerId", function(req, res, next){
	// Validate Request
	if (!req.body) {
		res.status(400).send({
		  message: "Content can not be empty!"
		});
	}

	Customer.updateById(
		req.params.customerId,
		new Customer(req.body),
		(err, data) => {
		  if (err) {
			if (err.kind === "not_found") {
			  res.status(404).send({
				message: `Not found Customer with id ${req.params.customerId}.`
			  });
			} else {
			  res.status(500).send({
				message: "Error updating Customer with id " + req.params.customerId
			  });
			}
		  } else res.send(data);
		}
	);
});

// Patch a field
app.patch("/customers/:customerId", function(req, res, next) {
	// Validate Request
	if (!req.body) {
		res.status(400).send({
		  message: "Content can not be empty!"
		});
	}
	
	//delete req.body;
	
	Customer.updateById(
		req.params.customerId,
		new Customer(req.body),
		(err, data) => {
		  if (err) {
			if (err.kind === "not_found") {
			  res.status(404).send({
				message: `Not found Customer with id ${req.params.customerId}.`
			  });
			} else {
			  res.status(500).send({
				message: "Error updating Customer with id " + req.params.customerId
			  });
			}
		  } else res.send(data);
		}
	);
});


// Delete a Customer with customerId
app.delete("/customers/:customerId", function(req, res, next){
	Customer.remove(req.params.customerId, (err, data) => {
		if (err) {
		  if (err.kind === "not_found") {
			res.status(404).send({
			  message: `Not found Customer with id ${req.params.customerId}.`
			});
		  } else {
			res.status(500).send({
			  message: "Could not delete Customer with id " + req.params.customerId
			});
		  }
		} else res.send({ message: `Customer was deleted successfully!` });
	});
});

// Delete all new Customer
app.delete("/customers", function(req, res, next){
	Customer.removeAll((err, data) => {
		if (err)
		  res.status(500).send({
			message:
			  err.message || "Some error occurred while removing all customers."
		  });
		else res.send({ message: `All Customers were deleted successfully!` });
	});
});



const server = app.listen(3000, ()=> {
	console.log(`Express running -> Port ${server.address().port}`);
});