const apiUrl = 'http://localhost:5000/api/v1/dishes'
async function getData(api) {
    try {
        const response = await fetch(api)
        const responseToJSON = await response.json();
        const dishesData = responseToJSON.data.dishes
        document.getElementById()
    } catch (e) {
        console.log(e)
    }
}

getData(apiUrl)
