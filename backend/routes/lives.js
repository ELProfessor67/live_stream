import express from 'express'
import { create, singleLive, getLives } from '../controllers/lives.js';
import { isAuthenticated } from '../middlewares/isAuth.js';
const router = express.Router();


router.route('/lives/create').post(isAuthenticated,create);
router.route('/get/live/:id').get(singleLive);
router.route('/get/all/lives').get(getLives);

export default router;