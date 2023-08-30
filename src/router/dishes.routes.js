import { Router } from "express";
import dishesController from "../controller/dishes.controller";

const router = Router()
const dishesAPI = '/'

router.get(dishesAPI, dishesController.getAll)
router.post(dishesAPI, dishesController.createDish)

router.get(dishesAPI + ":id", dishesController.getById)
router.patch(dishesAPI + ":id", dishesController.updateDish)
router.delete(dishesAPI + ':id', dishesController.deleteDish)


export default router;