import db from "../config/db.knex";
import CreateDishDto from "./dto/create-dish.dto";


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
            }).select()
    }

    async createDish(title, description, category, price, imageUrl) {
        try {
            const data = new CreateDishDto(title, description, category, price, imageUrl)
            if (!data.title) return {message: "title cannot be empty"}
            if (!data.description) return {message: "description cannot be empty"}
            if (!data.price) return {message: "price must be numbers or not empty"}
            if (!data.imageUrl) return {message: "image url cannot be empty"}
            await db(this.tableName).insert(data);
            return data
        } catch (e) {
            console.log(e)
        }
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