import express from 'express';
import {createProductHandler, deleteProductHandler, getProductHandler, getProductsHandler, updateProductHandler} from '../controllers/product.controller';
import {deserializeUser} from '../middleware/deserializeUser';
import {requireUser} from '../middleware/requireUser';
import {validate} from '../middleware/validate';
import {createProductSchema, deleteProductSchema, getProductSchema, updateProductSchema} from '../schemas/product.schema';

const router = express.Router();

router.use(deserializeUser, requireUser);
router //
	.route('/')
	.post(validate(createProductSchema), createProductHandler)
	.get(getProductsHandler);

router //
	.route('/:productId')
	.get(validate(getProductSchema), getProductHandler)
	.patch(validate(updateProductSchema), updateProductHandler)
	.delete(validate(deleteProductSchema), deleteProductHandler);

export default router;
