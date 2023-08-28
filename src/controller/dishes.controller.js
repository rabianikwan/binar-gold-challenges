import DishesModels from "../model/dishes.models";
import {msgOk} from "../utils/okHandler";
import {ErrorServer, ErrorUserInput} from "../utils/errorHelper";

const dishesModels = new DishesModels()
class DishesController {
    tableName = "dishes";
    constructor() {}
    async getAll(req, res) {
        const data = await dishesModels.getAll();
        return msgOk(res, 200, "retrieve all dishes", data)
    }

    async createDish(req, res) {
        const { title, description, category, price, imageUrl } = req.body
        const dish = await dishesModels.createDish(title, description, category, price, imageUrl)
        return msgOk(res, 201, "dish has been created", dish)
    }

}

const dishesController = new DishesController()
export default dishesController;