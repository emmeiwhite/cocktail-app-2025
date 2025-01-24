// To fetch drinks & display drinks
import fetchDrinks from './fetchDrinks.js'

async function fetchAndRender(url) {
  console.log(url)
  // 1. Fetch Drinks: We make another function call to fetch drinks
  const data = await fetchDrinks(url)
  console.log(data)
  // 2. Display drinks: Combine Data with UI Template
}

export default fetchAndRender
