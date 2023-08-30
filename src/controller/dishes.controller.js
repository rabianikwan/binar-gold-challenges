import DishesModels from "../model/dishes.models";
import {msgOk} from "../utils/okHandler";
import {errorResp} from "../utils/errorRes";

const dishesModels = new DishesModels()
class DishesController {
    tableName = "dishes";
    constructor() {}
    async getAll(req, res) {
        console.time("time fetching all data")
        const data = await dishesModels.getAll();
        console.timeEnd("time fetching all data")
        return msgOk(res, 200, "retrieve all dishes", data)

    }

    async getById(req, res) {
        const { id } = req.params
        try {
            const data = await dishesModels.getById(id)
            if (data) return msgOk(res, 200, "dish has found", data)
        } catch (e) {
            if (e.code === '22P02') return errorResp(res, 400, "id not found")
        }
    }

    async createDish(req, res) {
        try {
            const {title, description, category, price, imageUrl} = req.body
            const dish = await dishesModels.createDish(title.toLowerCase(), description, category, price, imageUrl)

            // handle error input
            if (dish.message) return errorResp(res, 400, dish.message)

            return msgOk(res, 201, "dish has been created", dish)
        } catch (e) {
            if (e.code === "23505") return errorResp(res, 400, "dish already exist")
            console.log(e)
        }
    }
}

const dishesController = new DishesController()
export default dishesController;