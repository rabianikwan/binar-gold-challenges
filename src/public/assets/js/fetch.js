const apiUrl = 'http://localhost:3000/api/v1/dishes'
async function getData(api) {
    try {
        const pickOne = ['filter-starters', 'filter-speciality', 'filter-salads'];
        const response = await fetch(api)
        const responseToJSON = await response.json();
        const dishesData = await responseToJSON.data.dishes
        const menu = document.getElementById("anchor")
        dishesData.forEach(dish => {
            const dishTitle = JSON.stringify(dish.title)
            const dishDescription = JSON.stringify(dish.description)
            const dishPrice = JSON.stringify(dish.price)
            const dishCategory = JSON.stringify(dish.category)
            const dishImageUrl = JSON.stringify(dish.imageUrl)
            const random = pickOne[Math.trunc(pickOne.length * Math.random())]
            console.log(dishTitle, dishDescription, dishPrice, dishCategory, dishImageUrl)
            menu.insertAdjacentHTML('afterend', `
  
            <div class="col-lg-6 menu-item ${random} mb-5">
            <img src="${dishImageUrl}" class="menu-img" alt="${dishTitle}">
            <div class="menu-content">
              <a href="#">${dishTitle}</a><span>Rp. ${dishPrice}</span>
            </div>
            <div class="menu-ingredients">
              ${dishDescription}
            </div>
            </div>
            `)

        })
    } catch (e) {
        console.log(e)
    }
}

getData(apiUrl)
