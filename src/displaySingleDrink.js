import get from './getElement.js'

export default function displaySinceDrink(drink) {
  const drinkData = drink.drinks[0]
  console.log(drinkData)

  const drinkSection = get('.single-drink')
  const { strDrinkThumb: drinkImage, strDrink: drinkName } = drinkData

  const UIwithData = `
      <img
        src="${drinkImage}"
        alt="cocktail drink"
        class="drink-img" />
      <article class="drink-info">
        <h2 class="drink-name">${drinkName}</h2>
        <p class="drink-desc"></p>
        <ul class="drink-ingredients"></ul>
        <a
          href="index.html"
          class="btn">
          all cocktails
        </a>
      </article>`

  drinkSection.innerHTML = UIwithData
}
