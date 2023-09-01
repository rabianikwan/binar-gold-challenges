const { v4 } = require("uuid");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.seed = async function (knex){
    // Deletes ALL existing entries
    await knex("dishes").insert([
        // Insert new menus
        { id: v4(), title: "Naughty Platter",description: "Premium Finger foods, Tortilla Chips, Chicken Fingers, Sausages, Cheese Fishbowls, Cheese Sauce & Sour-cream",category: "Appetizers", price: 85000, imageUrl: "https://media-cdn.tripadvisor.com/media/photo-s/10/4f/8d/33/grilled-hog-s-platter.jpg"},
        { id: v4(), title: "Nachos", description: "Tortilla Chips, Roast Beef Patties, Cheese Sauce, Parmesan Cheese, Onion, Chopped", category: "Appetizers", price: 65000, imageUrl: "https://downshiftology.com/wp-content/uploads/2022/03/How-to-Make-Nachos-4.jpg"},
        { id: v4(), title: "Zuppa Soup",description: "Cream Mushroom Soup, Smoked Beef, Corn Kernel, Broccoli, Crispy Puff Pastry", category: "Appetizers", price: 55000, imageUrl: "https://awsimages.detik.net.id/community/media/visual/2022/12/29/resep-zuppa-soup_43.jpeg?w=1200"},
        { id: v4(), title: "Garden Salad", description: "Organic Hydroponic, Lettuce, Cherry Tomatoes, Slice Onions, Slice Cucumber, Boiled Egg, Smoked Beef,  Salad Dressing, Homemade Mayo, Parmesan", category: "Salads", price: 65000, imageUrl: "https://barefeetinthekitchen.com/wp-content/uploads/2012/02/BLT-salad-2.jpg"},
        { id: v4(), title: "Healthy Salad", description: "Organic Hydroponic Lettuce, Cherry Tomatoes, Slice Onions, Cucumbers, Corn, Dragon Fruit, Edamame, Yogurt Dressing", price: 70000, category: "Salads" , imageUrl: "https://sunkissedkitchen.com/wp-content/uploads/2020/03/dragon-fruit-salad-feature.jpg"},
        { id: v4(), title: "Prime Cut Beef Dendeng", description: "Chili Marinated Beef Jerky, Sambal Boiled Egg, Potato Stick with Peanut, Emping Melinjo, Jasmine Rice, Fried Shallots",category: "Indonesian Delight",price: 55000,imageUrl: "https://lonumedhu.com/sites/default/files/LittleBali.jpg"}
    ])
}