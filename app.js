// Modules are executed in strict mode by default
// Each module has its own scope so that variables and functions are not added to the global scope
// We can import other modules into this file

// The below url is a default url to show some drinks by default
const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a`

import fetchAndRender from './src/drinksFetchAndRender.js'
import './src/searchForm.js' // this will execute function in searchForm.js directly

// Once the page loads, we'll call our presentDrinks function to fetch & render the drinks
window.addEventListener('DOMContentLoaded', function () {
  // Calling function which fetches & renders the drinks
  fetchAndRender(url)
})
