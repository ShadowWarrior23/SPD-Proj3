const texts = ["French toast \n Ingredients: \n - 2 slices of bread \n - 1 egg \n - 1/2 cup milk \n optional: \n -Sugar, \n -cinnamon, \n -nutmeg, \n -vanilla \n Allergens: \n sesame, \n soy, peanut, \n tree nuts \n a dish of sliced bread soaked in beaten eggs and often milk or cream, then pan-fried." , "Antipasti \n Ingredients: \n Cured Meats \n Cheeses \n Vegetables \n Bread \n Pickled Foods \n  Allergens: \n Milk \n Wheat/Gluten \n Sulphites \n Antipasti refers to the traditional Italian appetizer, typically served before a main meal. The word 'antipasto' translates to 'before the meal,' and this dish consists of a variety of appetizers, often showcasing cured meats, cheeses, vegetables, olives, and pickled foods.", "Hummus"];

const ps = document.querySelectorAll(".big-cards p");
for (let i = 0; i < texts.length; i++) {
    ps[i].innerText = texts[i]
}