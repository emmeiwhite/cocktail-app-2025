// Modules are executed in strict mode by default
// Each module has its own scope so that variables and functions are not added to the global scope
// We can import other modules into this file

const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=zzzz`

import fetchAndRender from './src/drinksFetchAndRender.js'

// Once the page loads, we'll call our presentDrinks function to fetch & render the drinks
window.addEventListener('DOMContentLoaded', function () {
  // Calling function which fetches & renders the drinks
  fetchAndRender(url)
})
