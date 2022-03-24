const form = document.querySelector('form'),
    generate_recipe = document.querySelector('.generate_recipe'),
    meal_name = document.querySelector('.meal_name'),
    display_recipe = document.querySelector('.display_recipe'),
    search_input = document.querySelector('.search_input'),
    img2 = document.querySelector('#img2'),
    img_recette = document.querySelector('.img_recette'),
    recette = document.querySelector('.recette'),
    pop_up = document.querySelector('.pop-up'),
    exit = document.querySelector('.exit'),
    pop_up_title = document.querySelector('h2'),
    ingredients = document.querySelector('ul')


// ingredients.addEventListener('click', () => alert('okii'))


const random_search = "https://www.themealdb.com/api/json/v1/1/random.php",
    id_search = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=52913",
    name_search = "https://www.themealdb.com/api/json/v1/1/search.php?s=Brie"


form.addEventListener('submit', (e) => {
    e.preventDefault
    alert('okkkkkk')
})

function searchById(idMeal) {
    fetch(id_search + idMeal)
        .then(res => { console.log(res.json()) })
}

generate_recipe.addEventListener('click', () => {
    fetch(random_search)
        .then(response => { return (response.json()) })
        .then(data => {
            data.meals.forEach(meal => {
                // console.log(meal)
                let image = meal.strMealThumb
                img2.src = image
                meal_name.innerHTML = meal.strMeal
                img_recette.src = image
                pop_up_title.innerHTML = meal.strMeal
                recette.innerHTML = meal.strInstructions
                console.log(meal.strIngredient1)
            })
        })
})

display_recipe.addEventListener('click', (e) => {
    e.preventDefault
    pop_up.style.display = 'block'
    exit.addEventListener('click', () => pop_up.style.display = 'none')
        // alert('recette')
})