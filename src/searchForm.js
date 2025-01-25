import get from './getElement.js'
import fetchAndRender from './drinksFetchAndRender.js'

const form = get('.search-form')
const input = get('[name="drink"]')

const baseURL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`

form.addEventListener('keyup', function (e) {
  // I think the event bubbles here | Event Capturing
  e.preventDefault()
  let value = input.value

  if (!value) return

  fetchAndRender(`${baseURL}${value}`)
})
