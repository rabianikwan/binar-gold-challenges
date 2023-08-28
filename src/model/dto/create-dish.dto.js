import {v4} from "uuid";
import DishesModels from "../dishes.models";

class CreateDishDto {
    constructor() {}
    createDto(title, description, category, price, imageUrl) {
        return {
            id: v4(),
            title: title.toUpperCase(),
            description: description.toLowerCase(),
            category: category.toLowerCase(),
            price : Number(price),
            imageUrl: imageUrl
        }
    }
}
const dishDto = new CreateDishDto()
export default dishDto;