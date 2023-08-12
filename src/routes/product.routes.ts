import express from 'express';
import {
	adminCreateProductHandler,
	adminGetProductsHandler, //
	adminDeleteProductHandler,
	getProductHandler,
	getProductsHandler,
	adminUpdateProductHandler,
} from '../controllers/product.controller';
import {deserializeUser} from '../middleware/deserializeUser';
import {requireUser} from '../middleware/requireUser';
import {validate} from '../middleware/validate';
import {createProductSchema, deleteProductSchema, getProductSchema, updateProductSchema} from '../schemas/product.schema';
import {isAdmin} from '../middleware/authorized';

const router = express.Router();

router.use(deserializeUser, requireUser);

// Admin routes
router //
	.route('/admin')
	.post(validate(createProductSchema), isAdmin, adminCreateProductHandler)
	.get(isAdmin, adminGetProductsHandler);
router //
	.route('/admin/:productId')
	.patch(validate(updateProductSchema), isAdmin, adminUpdateProductHandler)
	.delete(validate(deleteProductSchema), isAdmin, adminDeleteProductHandler);

// Public routes
router //
	.route('/')
	.get(getProductsHandler);
router //
	.route('/:productId')
	.get(validate(getProductSchema), getProductHandler);

export default router;
