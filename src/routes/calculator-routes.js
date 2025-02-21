import express from "express";
import { calculate } from "../controllers/calculator-controllers.js";

const router = express.Router();

router.post('/calculate', calculate);


export default router;