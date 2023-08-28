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
        try {
            return db(this.tableName)
                .where({
                    id : id
                }).select()
        } catch (e) {
            console.error(e)
        }
    }

    async createDish(title, description, category, price, imageUrl) {
        const data = dishDto.createDto(title, description, category, price, imageUrl)
        await db(this.tableName).insert(data);
        return data
    }

    // update
    async updatePrice(id, price) {
        return db(this.tableName).where({ id }).update({ price })
    }

    async updateDish(id, title, description, price, imageUrl) {
        return (await this.getById(id)).update({
            title,
            description,
            price,
            imageUrl
        })
    }

    // delete
    async deleteDish(id) {
        return db(this.tableName).where({id}).delete();
    }
}

export default DishesModels;