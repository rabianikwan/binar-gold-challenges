import { Router } from "express";
import dishesController from "../controller/dishes.controller";

const router = Router()
const dishesAPI = '/'

router.get(dishesAPI, dishesController.getAll)
router.post(dishesAPI, dishesController.createDish)


export default router;