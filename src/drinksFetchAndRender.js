// To fetch drinks & display drinks
import fetchDrinks from './fetchDrinks.js'
import displayDrinks from './displayDrinks.js'

async function fetchAndRender(url) {
  // 1. Fetch Drinks: We make another function call to fetch drinks
  const data = await fetchDrinks(url)
  console.log(data) // null or object of array

  // 2. Display drinks: Combine Data with UI Template
  const section = await displayDrinks(data)
}

export default fetchAndRender
