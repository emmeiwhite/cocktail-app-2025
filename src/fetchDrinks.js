import { showLoading, hideLoading } from './toggleLoading.js'

const fetchDrinks = async url => {
  showLoading()
  try {
    const response = await fetch(url)
    const data = await response.json()
    if (data) {
      hideLoading()
    } else {
      throw new Error('Error fetching data')
    }
    console.log(data)
    return data // fetchDrinks either returns data or returns null from the API
  } catch (error) {
    hideLoading()
    console.log(error)
  }
}

export default fetchDrinks
