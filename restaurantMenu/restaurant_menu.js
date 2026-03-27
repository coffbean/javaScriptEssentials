const bfTotalIntems = document.getElementById("breakfastTotalItems");
const bfMenuIntems = document.getElementById("breakfastMenuItems");
const mcTotalIntems = document.getElementById("maincourseTotalItems");
const mcMenuIntems = document.getElementById("maincourseMenuItems");
const dTotalIntems = document.getElementById("dessertTotalItems");
const dMenuIntems = document.getElementById("dessertMenuItems");

// Arrays of list of items per menu type

// const breakfastMenu = ['Pancakes', 'Eggs Benedict', 'Oatmeal', 'Frittata'];

const breakfastMenu = ['Pancakes - $12', 'Eggs Benedict - $22.99', 'Oatmeal - $21.99', 'Frittata - $15'];
const mainCourseMenu = ['Steak - $55', 'Pasta - $45', 'Burger - $25', 'Salmon - $40'];
const dessertMenu = ['Cake - $12', 'Ice Cream - $10', 'Pudding - $9', 'Fruit Salad - $11'];

// Displaying Breakfast menu type items using MAP (no looping)

const bfMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
    bfMenuIntems.innerHTML = bfMenuItemsHTML;  // Breakfast items

// Displaying Main Course menu type items using FOREACH loop

let mcItem = '';
mainCourseMenu.forEach((item, index) => {
    mcItem += `<p>Item ${index + 1}: ${item}</p>`;});
    mcMenuIntems.innerHTML = mcItem;

// Displaying Dessert menu type items using FOR loop

let dItem = '';
for (i=0; i<dessertMenu.length; i++) {
    dItem += `<p>Item ${i+1}: ${dessertMenu[i]}</p>`;
}
    dMenuIntems.innerHTML = dItem;

