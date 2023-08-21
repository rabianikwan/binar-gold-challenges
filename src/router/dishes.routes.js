import { Router } from "express";
import dishesController from "../controller/dishes.controller";

const router = Router()

router.get('/api/v1/dishes', dishesController.getAll)

export default router;