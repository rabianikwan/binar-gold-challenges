import DishesModels from "../model/dishes.models";
import {msgOk} from "../utils/okHandler";
import {ErrorServer, ErrorUserInput} from "../utils/errorHelper";
import {errorResp} from "../utils/errorRes";

const dishesModels = new DishesModels()
class DishesController {
    tableName = "dishes";
    constructor() {}
    async getAll(req, res) {
        const data = await dishesModels.getAll();
        return msgOk(res, 200, "retrieve all dishes", data)
    }

    async getById(req, res) {
        const { id } = req.params
        try {
            const data = await dishesModels.getById(id)
            if (data) return msgOk(res, 200, "dish has found", data)
        } catch (e) {
            console.log(e.code)
            if (e.code === '22P02') return errorResp(res, 400, "id not found")
        }
    }

    async createDish(req, res) {
        const { title, description, category, price, imageUrl } = req.body
        const dish = await dishesModels.createDish(title, description, category, price, imageUrl)
        return msgOk(res, 201, "dish has been created", dish)
    }

}

const dishesController = new DishesController()
export default dishesController;