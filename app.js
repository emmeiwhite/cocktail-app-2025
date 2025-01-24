// Modules are executed in strict mode by default
// Each module has its own scope so that variables and functions are not added to the global scope
// We can import other modules into this file

const url = `www.thecocktaildb.com/api/json/v1/1/search.php?s=a`

import presentDrinks from './src/presentDrinks.js'

// Once the page loads, we'll call our presentDrinks function to fetch & render the drinks
window.addEventListener('DOMContentLoaded', function () {
  presentDrinks(url)
})
