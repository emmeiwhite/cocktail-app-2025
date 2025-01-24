import get from './getElement.js'

const displayDrinks = ({ drinks }) => {
  const section = get('.section-center')
  const title = get('.title')

  if (!drinks) {
    // hide loading
    // text message to show
    title.textContent = 'Sorry, No drinks match your request'
    section.innerHTML = null
    return
  }

  const templatedDrinks = drinks
    .map(drink => {
      const { idDrink, strDrinkThumb, strDrink } = drink
      return `
        <a href="drink.html">
          <article
            class="cocktail"
            data-id="${idDrink}">
            <img
              src="${strDrinkThumb}"
              alt="cocktail drink" />
            <h3>${strDrink}</h3>
          </article>
        </a>`
    })
    .join('')
  section.innerHTML = templatedDrinks
  return section
}
export default displayDrinks
