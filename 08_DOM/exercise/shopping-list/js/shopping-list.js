const shoppingList = document.querySelector('.shopping-list');
// add pageTitle
let pageTitle = 'My Shopping List';
// add groceries
let groceries = ['Milk', 'Eggs', 'Fruit', 'Juice', 'Bread', 'Ceral', 'Chips', 'Meat', 'Vegetables', 'Nuts'];
/**
 * This function will get a reference to the title and set its text to the value
 * of the pageTitle variable that was set above.
 */
function setPageTitle() {
  title.innerText = pageTitle;
  shoppingList.appendChild(title);
}

/**
 * This function will loop over the array of groceries that was set above and add them to the DOM.
 */
function displayGroceries() {
  const ul = document.getElementById('groceries');
  shoppingList.appendChild(ul);

  groceries.forEach(item => {
    const li = document.createElement('li')
    li.innerText = item
    ul.appendChild(li)
  });
}

/**
 * This function will be called when the button is clicked. You will need to get a reference
 * to every list item and add the class completed to each one
 */
function markCompleted() {
  let groceryList = document.querySelectorAll('#groceries > li');
  groceryList.forEach(element => element.classList.add('completed'));
}

setPageTitle();

displayGroceries();

// Don't worry too much about what is going on here, we will cover this when we discuss events.
document.addEventListener('DOMContentLoaded', () => {
  // When the DOM Content has loaded attach a click listener to the button
  const button = document.querySelector('.btn');
  button.addEventListener('click', markCompleted);
});
