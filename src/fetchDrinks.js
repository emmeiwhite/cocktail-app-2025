import get from './getElement.js'
// An async-function always returns a promise (no matter what)
const loaderDiv = get('.loading')
const fetchDrinks = async url => {
  try {
    loaderDiv.classList.remove('hide-loading')
    const response = await fetch(url)
    const data = await response.json()
    if (data) {
      loaderDiv.classList.add('hide-loading')
    } else {
      throw new Error('Error fetching data')
    }
    console.log(data)
    return data // fetchDrinks either returns data or returns null from the API
  } catch (error) {
    loaderDiv.classList.add('hide-loading')
    console.log(error)
  }
}

export default fetchDrinks
