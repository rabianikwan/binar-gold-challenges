import DishesModels from "../model/dishes.models";

const dishesModels = new DishesModels()
class DishesController {
    tableName = "dishes";
    constructor() {}
    async getAll(req, res) {
        const data = await dishesModels.getAll();
        return res.json({ data })
    }

    async createDish(req, res) {
        const { title, description, category, price, imageUrl } = req.body
        const dish = await dishesModels.createDish(title, description, category, price, imageUrl)
        res.status(201)
            .json({
                message : "dish has been create",
                dish : dish
            })
    }

}

const dishesController = new DishesController()
export default dishesController;