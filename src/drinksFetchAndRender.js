// To fetch drinks & display drinks
import fetchDrinks from './fetchDrinks.js'
import displayDrinks from './displayDrinks.js'

import setDrink from './setDrink.js'

async function fetchAndRender(url) {
  // 1. Fetch Drinks: We make another function call to fetch drinks
  const data = await fetchDrinks(url)
  console.log(data) // null or object of array

  // 2. Display drinks: Combine Data with UI Template
  // Note: We need section element to attach Event Delegation (because as we are click on any drink, we are taken to the another page drink.html & there is no way how we can remember our id of the particular drink.)
  const section = await displayDrinks(data)
  console.log(section) // can be null or section element containing drinks
  setDrink(section)
}

export default fetchAndRender
