const bfTotalIntems = document.getElementById("breakfastTotalItems");
const bfMenuIntems = document.getElementById("breakfastMenuItems");
const mcTotalIntems = document.getElementById("maincourseTotalItems");
const mcMenuIntems = document.getElementById("maincourseMenuItems");
const dTotalIntems = document.getElementById("dessertTotalItems");
const dMenuIntems = document.getElementById("dessertMenuItems");

// Arrays of list of items per menu type

const breakfastMenu = ['Pancakes', 'Eggs Benedict', 'Oatmeal', 'Frittata'];
const mainCourseMenu = ['Steak', 'Pasta', 'Burger', 'Salmon'];
const dessertMenu = ['Cake', 'Ice Cream', 'Pudding', 'Fruit Salad'];

// Displaying menu type items using MAP (no looping)

const bfMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
    bfMenuIntems.innerHTML = bfMenuItemsHTML;  // Breakfast items

// const mcMenuItemsHTML = mainCourseMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
   // mcMenuIntems.innerHTML = mcMenuItemsHTML;  // Breakfast items

// const dMenuItemsHTML = dessertMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
   // dMenuIntems.innerHTML = dMenuItemsHTML;  // Breakfast items


// Displaying menu type items using FOREACH loop

let mainCourseItem = '';
mainCourseMenu.forEach((item, index) => {
    mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`;});
    mcMenuIntems.innerHTML = mainCourseItem;

// Displaying menu type items using FOR loop

let dessertCourseItem = '';
for (i=0; i<dessertMenu.length; i++) {
    dessertCourseItem += `<p>Item ${i+1}: ${dessertMenu[i]}</p>`;
}
    dMenuIntems.innerHTML = dessertCourseItem;
