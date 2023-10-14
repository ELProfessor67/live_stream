import express from 'express'
const router = express.Router();
import {getMyProfile, login, register} from '../controllers/user.js';
import { isAuthenticated } from '../middlewares/isAuth.js';

router.route('/register').post(register);
router.route('/login').post(login);
router.route('/me').get(isAuthenticated,getMyProfile);



export default router;