import db from "../config/db.knex";
import { ErrorServer } from "../utils/errorHelper";
import {v4} from "uuid";


class DishesModels {
    tableName = "dishes"
    constructor() {}
    async getAll() {
        return db(this.tableName)
            .select("*");
    }

    async find(
        { limit, page} = { limit: 10, page:1 },
        { id, title, description, category, price, imageUrl } = {
            id: "",
            title: "",
            description: "",
            category: "",
            price: "",
            imageUrl: ""
        }) {
        try {
            let query = db
                .select("id", "title", "description", "category", "price", "imageUrl")
                .table(this.tableName)

            if (id) query = query.whereLike("id", id);
            if (title) query = query.whereLike("title", title);
            if (description) query = query.whereLike("description", description);
            if (category) query = query.whereLike("category", category);
            if (price) query = query.whereLike("price", price);
            if (imageUrl) query = query.whereLike("imageUrl", imageUrl);

            // get total
            let queryTotal = db(this.tableName).count("*")
            if (id) queryTotal = queryTotal.where({ id })
            if (title) queryTotal = queryTotal.where({ title })
            if (category) queryTotal = queryTotal.where({ category })

            // assign total
            let total = 0
            const totalQuery = await queryTotal
            if (totalQuery.length > 0) total = Number(totalQuery[0].count);

            const dishes = await query;
            return {
                dishes,
                total,
                page,
                has_next: page * limit < total
            }
        } catch (e) {
            console.log(e)
            throw new ErrorServer(e.detail)
        }

    }

    async getById(id) {
        return db(this.tableName)
            .where({
                id : id
            }).select()
    }

    async createDish(title, description, category, price, imageUrl) {
        const dish = {
            id: v4(),
            title,
            description,
            category,
            price,
            imageUrl
        }
        if (!dish.title) return {message: "title cannot be empty"}
        if (!dish.description) return {message: "description cannot be empty"}
        if (!dish.price) return {message: "price must be numbers or not empty"}
        if (!dish.category) return {message: "category must not empty"}
        if (!dish.imageUrl) return {message: "image url cannot be empty"}
        await db(this.tableName).insert(dish);
        return dish
    }

    // update
    async updateDish(id, title, description, category, price, imageUrl) {
        return db(this.tableName).where({ id }).update({
            title,
            description,
            category,
            price,
            imageUrl
        })
    }

    // delete
    async deleteDish(id) {
        return db(this.tableName).where({ id }).delete();
    }
}

export default DishesModels;