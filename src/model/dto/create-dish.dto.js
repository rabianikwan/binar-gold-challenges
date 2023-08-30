import {v4} from "uuid";

class CreateDishDto {
    constructor(title, description, category, price, imageUrl) {
        this.id = v4();
        this.title = String(title);
        this.description = String(description);
        this.category = String(category);
        this.price = Number(price);
        this.imageUrl = String(imageUrl);
    }
}
export default CreateDishDto;