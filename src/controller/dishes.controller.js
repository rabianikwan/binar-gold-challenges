import DishesModels from "../model/dishes.models";

const dishesModels = new DishesModels()
class DishesController {
    tableName = "dishes";
    constructor() {}
    async getAll(req, res) {
        const data = await dishesModels.getAll();
        return res.json({ data })
    }

}

const dishesController = new DishesController()
export default dishesController;