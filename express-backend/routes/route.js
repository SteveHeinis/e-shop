import express from 'express';

import Product from '../models/product';

const router = express.Router()

// Get all
router.get('/', (req,res) => {
	Product.find({}, (err, products)=>{
        err ? res.send(err) : res.json(products);
    });
});

// Get by ID 
router.get('/:id', (req, res) => {
	Product.findById(req.params.id, (err, product) => {
		err ? res.send(err) : res.json(product)
	});
});

// Post
router.post('/addproduct', (req,res) => {
	const newProduct = new Product(req.body);
	newProduct.save((err, newProductSaved) => {
		err ? res.send(err) : res.redirect("http://localhost:3000");
	});
});

// Update
router.post('/:id/update', (req,res) => {
	Product.findOneAndUpdate(req.params.id, req.body, (err, updatedProduct) => {
		err ? res.send(err) : res.redirect("http://localhost:3000");
	});
});

// Remove 
router.post('/:id/delete', (req,res) => {
	Product.findByIdAndRemove(req.params.id, (err, product) => {
		err ? res.send(err) : res.redirect("http://localhost:3000")
	});
});

export default router 