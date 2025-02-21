import express from 'express';

import {isAuthenticated} from '../middlewares/auth.js';
import { placeOrder } from '../controllers/order.js';

const router=express.Router();

router.post("/createorder",isAuthenticated,placeOrder);

export default router;