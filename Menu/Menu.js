/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an array as its only argument.

  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/
function createList (elements) {
  // define new elements
  let menu = document.createElement('div');
  let ul = document.createElement('ul');
  let Students = document.createElement('li');
  let  Faculty = document.createElement('li');
  let  New = document.createElement('li');
  let  TechTrends = document.createElement('li');
  let  Music = document.createElement('li');
  let  LogOut = document.createElement('li');
  

  //assign classes
  menu.classList.add('menu');

  //add text content
  Students.textContent = elements[0];
  Faculty.textContent = elements[1];
  New.textContent = elements[2];
  TechTrends.textContent = elements[3];
  Music.textContent = elements[4];
  LogOut.textContent = elements[5];

  //append children
  ul.appendChild(Students);
  ul.appendChild(Faculty);
  ul.appendChild(New);
  ul.appendChild(TechTrends);
  ul.appendChild(Music);
  ul.appendChild(LogOut);
  menu.appendChild(ul);
  


  //add Event listeners
 const menuButton = document.querySelector('.menu-button');
  menuButton.addEventListener('click', event => {
    console.log('menu opened', event.target);
    menu.classList.toggle('menu--open');
});
  
  return menu;
}
let  header = document.querySelector('.header');
header.appendChild(createList(menuItems));
