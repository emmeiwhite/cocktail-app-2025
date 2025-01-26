import fetchDrinks from './src/fetchDrinks.js'
import displaySingleDrink from 'src/displaySingleDrink.js'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const presentDrink = async () => {
  const drinkId = localStorage.getItem('drink-id')

  console.log(drinkId)
  const drink = await fetchDrinks(`${url}${drinkId}`)
  displaySingleDrink(drink)
}

window.addEventListener('DOMContentLoaded', presentDrink)

/*
const grantParent = get('.grand-parent')
const parent = get('.parent')
const child = get('.child')

grantParent.addEventListener('click', function (e) {
  console.log('Grant Parent Event Handled')
})

parent.addEventListener(
  'click',
  function (e) {
    console.log('Parent Event Handled')
  },
  { capture: true }
)

child.addEventListener('click', function (e) {
  console.log('Child Event Handled')
})
  */

// Target element will be child, Let's see the behavior
