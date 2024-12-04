const texts = ["French toast \n a dish of sliced bread soaked in beaten eggs and often milk or cream, then pan-fried. \n Ingredients: \n - 2 slices of bread \n - 1 egg \n - 1/2 cup milk \n optional: -Sugar, -cinnamon, nutmeg, and vanilla"];

const ps = document.querySelectorAll(".big-cards p");
for (let i = 0; i < texts.length; i++) {
    ps[i].innerText = texts[i]
}