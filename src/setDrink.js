export default function setDrink(section) {
  if (!section) return

  // Event Delegation: Instead of attaching an event handler to each child element individually, you can add a single event listener to a common ancestor. This way when an event occurs on a child, it bubbles up to the ancestor, where it can be handled centrally.
  section.addEventListener('click', function (e) {
    // e.preventDefault()
    //   Either the user clicks on the the image or the h3 element and we need to get the id. Both the image and the h3 have a common parent. e.target.parentElement.dataset.id will do it :)
    const id = e.target.parentElement.dataset.id
    console.log(id)

    //   But practically speaking we have to move to a different page drink.html. Now the question arises: How to store our id :)

    // localStorage to the rescue
    localStorage.setItem('drink-id', id)
  })
}
