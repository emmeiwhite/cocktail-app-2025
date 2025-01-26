import get from './getElement.js'

export default function displaySinceDrink(data) {
  const drinkData = data.drinks[0]
  console.log(drinkData)

  const drinkSection = get('.single-drink')
  const { strDrinkThumb: image, strDrink: name, strInstructions: desc } = drinkData
  const { strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5 } =
    drinkData

  // saving ingredients in an array to handle these wisely
  const ingredients = [
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5
  ]

  const finalIngredients = ingredients
    .map(ingredient => {
      if (!ingredient) return
      return `<li><i class="far fa-check-square"></i>${ingredient}</li>`
    })
    .join('')

  const UIwithData = `
      <img
        src="${image}"
        alt="cocktail drink"
        class="drink-img" />
      <article class="drink-info">
        <h2 class="drink-name">${name}</h2>
        <p class="drink-desc">${desc}</p>
        <ul class="drink-ingredients">
          ${finalIngredients}
        </ul>
        <a
          href="index.html"
          class="btn">
          all drinks
        </a>
      </article>`

  drinkSection.innerHTML = UIwithData
}
