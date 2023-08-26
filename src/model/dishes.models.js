import db from "../config/db.knex";
import dishDto from "./dto/create-dish.dto";

class DishesModels {
    tableName = "dishes"
    constructor() {}
    async getAll() {
        return db(this.tableName)
            .select("*");
    }

    async getById(id) {
        return db(this.tableName)
            .where({
                id : id
            })
    }

    async createDish(title, description, category, price, imageUrl) {
        const data = dishDto.createDto(title, description, category, price, imageUrl)
        await db(this.tableName).insert(data);
        return data
    }

}

export default DishesModels;