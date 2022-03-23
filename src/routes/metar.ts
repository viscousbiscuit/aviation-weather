import express from 'express';
import { getMetar } from '../controllers/metar.controller.js';

const router = express.Router();

router.get('/', getMetar);

export default router;
