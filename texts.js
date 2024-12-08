const texts = ["French toast \n Ingredients: \n - 2 slices of bread \n - 1 egg \n - 1/2 cup milk \n optional: \n -Sugar, \n -cinnamon, \n -nutmeg, \n -vanilla \n Allergens: \n -Sesame, \n -Soy, -Peanut, \n -Tree nuts \n a dish of sliced bread soaked in beaten eggs and often milk or cream, then pan-fried." , "Antipasti \n Ingredients: \n -Cured Meats \n -Cheeses \n -Vegetables \n -Bread \n -Pickled Foods \n  Allergens: \n -Milk \n -Wheat/Gluten \n -Sulphites \n Antipasti refers to the traditional Italian appetizer, typically served before a main meal. The word 'antipasto' translates to 'before the meal,' and this dish consists of a variety of appetizers, often showcasing cured meats, cheeses, vegetables, olives, and pickled foods.", "Hummus \n Ingredients: \n -Chickpeas \n  -Tahini \n -Fresh garlic \n  -Fresh lemon juice, \n -Extra virgin olive oil \n -Water \n Allergens: \n -Sesame \n -Garlic \n -Chickpeas \n -Lemon \n Hummus is a creamy, savory Middle Eastern dip made from chickpeas, tahini (sesame seed paste), olive oil, lemon juice, garlic, and a touch of salt. Its smooth texture and nutty, tangy flavor make it a versatile dish that can be paired with a variety of toppings and sides.", "Fried mushrooms \n Ingredients: \n -Fresh mushrooms \n -Olive oil or Butter \n -Garlic \n -Fresh herbs \n -Salt \n -Pepper \n Allergens: \n -Butter \n -Soy Sauce \n Fried mushrooms are a versatile and flavorful dish that can be enjoyed as a topping, side, or standalone snack."];

const ps = document.querySelectorAll(".big-cards p");
for (let i = 0; i < texts.length; i++) {
    ps[i].innerText = texts[i]
}