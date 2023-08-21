class CreateDishDto {
    constructor() {}
    createDto(title, description, category, price, imageUrl) {
        return {
            title: title.toUpperCase(),
            description: description.toLowerCase(),
            category: category.toLowerCase(),
            price : Number(price),
            imageUrl
        }
    }
}
const dishDto = new CreateDishDto()
export default dishDto;