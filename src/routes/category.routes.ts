import express from 'express';
import {getCategoryInputsHandler} from '../controllers/category.controller';
import {deserializeUser} from '../middleware/deserializeUser';
import {requireUser} from '../middleware/requireUser';

const router = express.Router();

router.use(deserializeUser, requireUser);
router //
	.route('/category-forms')
	.get(getCategoryInputsHandler);

export default router;
