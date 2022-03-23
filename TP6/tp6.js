const getMeals = async(page, limit) => {
    const API_URL = "https://www.themealdb.com/api/json/v1/1/random.php"
    const response = await fetch(API_URL);
    return await response.json();
}
console.log(getMeals())
const search_id = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=52913"
const search_name = "https://www.themealdb.com/api/json/v1/1/search.php?s=Brie"

// fetch(API_URL)
//     .then(response => { return (response.json()) })
//     .then(data => {
//         console.log(data)
//     })