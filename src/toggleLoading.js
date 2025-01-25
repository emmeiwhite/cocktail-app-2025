import get from './getElement.js'
// An async-function always returns a promise (no matter what)
const loaderDiv = get('.loading')

const showLoading = () => {
  loaderDiv.classList.remove('hide-loading')
}

const hideLoading = () => {
  loaderDiv.classList.add('hide-loading')
}

export { showLoading, hideLoading }
