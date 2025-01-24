// An async-function always returns a promise (no matter what)
const fetchDrinks = async url => {
  try {
    const response = await fetch(url)
    const data = response.json()
    console.log(data)
    return data
  } catch (error) {
    console.log(error)
  }
}

export default fetchDrinks
