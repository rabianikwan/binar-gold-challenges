import db from "../config/db.knex";

class DishesModels {
    tableName = "dishes"
    constructor() {}
    async getAll() {
        return db(this.tableName)
            .select("*");
    }
}

export default DishesModels;