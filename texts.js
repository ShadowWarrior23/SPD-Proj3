
const texts = ["French Toast \nIngredients: \n- 2 slices of bread \n- 1 egg \n- 1/2 cup milk \nOptional: \n- Sugar, \n- Cinnamon, \n- Nutmeg, \n- Vanilla \nAllergens: \n- Sesame, \n- Soy, \n- Peanut, \n- Tree nuts \nFrench toast is a dish of sliced bread soaked in beaten eggs and often milk or cream, then pan-fried.",

    "Antipasti \nIngredients: \n- Cured Meats \n- Cheeses \n- Vegetables \n- Bread \n- Pickled Foods \nAllergens: \n- Milk \n- Wheat/Gluten \n- Sulphites \nAntipasti refers to the traditional Italian appetizer, typically served before a main meal. The word 'antipasto' translates to 'before the meal,' and this dish consists of a variety of appetizers, often showcasing cured meats, cheeses, vegetables, olives, and pickled foods.",

    "Hummus \nIngredients: \n- Chickpeas \n- Tahini \n- Fresh garlic \n- Fresh lemon juice, \n- Extra virgin olive oil \n- Water \nAllergens: \n- Sesame \n- Garlic \n- Chickpeas \n- Lemon \nHummus is a creamy, savory Middle Eastern dip made from chickpeas, tahini (sesame seed paste), olive oil, lemon juice, garlic, and a touch of salt.",

    "Fried Mushrooms \nIngredients: \n- Fresh mushrooms \n- Olive oil or Butter \n- Garlic \n- Fresh herbs \n- Salt \n- Pepper \nAllergens: \n- Butter \n- Soy Sauce \nFried mushrooms are a versatile and flavorful dish that can be enjoyed as a topping, side, or standalone snack.",

    "Fruit Soup \nIngredients: \n- Fruit \n- Water, Fruit juice, or Coconut milk \n- Honey or sugar \nAllergens: \n- Coconut Milk \n- Citrus Fruits \n- Honey \nFruit soups are naturally sweet and tangy, featuring a medley of fresh fruits like pineapple, mango, apples, or citrus. These fruits provide a vibrant flavor profile, often enhanced with ginger or cinnamon for warmth.",

    "Tomato Soup \nIngredients: \n- Tomatoes \n- Vegetables \n- Chicken or vegetable broth \n- Heavy cream or coconut milk \n- Basil, parsley, salt, and pepper \nAllergens: \n- Tomatoes \n- Cream \n- Broth \nTomato soup is a classic comfort food, characterized by its rich, tangy base made from fresh, canned, or pureed tomatoes. Aromatics like onion and garlic are sautéed to build flavor, and chicken or vegetable broth is added to achieve the perfect consistency.",

    "Fish Soup \nIngredients: \n- Fish: White fish (cod, haddock), salmon, or shellfish (shrimp, mussels) \n- Base: Fish or vegetable broth \n- Vegetables: Onion, garlic, tomatoes \n- Seasonings: Bay leaves, dill, parsley, salt, and pepper \nAllergens: \n- Fish and Shellfish \n- Garlic and Onion \n- Broth \nFish soup combines the umami of fish (like cod, haddock, or salmon) with the rich, briny notes of shellfish (shrimp or mussels) for a hearty, protein-packed dish. The base is often a fish or vegetable broth, enriched with aromatics like onion, garlic, and tomatoes.",

    "Chicken Soup \nIngredients: \n- Vegetables \n- Chicken broth \n- Thyme, parsley, bay leaves, salt, and pepper \nAllergens: \n- Chicken \n- Garlic and Onion \n- Broth \nChicken soup is a hearty and comforting dish, featuring tender chicken pieces, carrots, celery, and aromatics like garlic and onion. The broth is typically chicken-based, seasoned with herbs like thyme and parsley, and enriched with bay leaves for depth. This soup is ideal for both everyday meals and as a remedy for colds.",

    "Lasagne \nIngredients: \n- Lasagne sheets \n- Ground beef or pork \n- Tomato sauce \n- Bechamel sauce \n- Grated cheese \n- Herbs and spices \n- Olive oil \n- Garlic and onions \nAllergens: \n- Gluten \n- Dairy \n- Eggs \n- Soy \nLasagne is a classic Italian dish made from layers of flat pasta sheets, a hearty filling, and rich sauces.",

    "Spaghetti \nIngredients: \n- Spaghetti pasta \n- Tomato sauce \n- Ground beef or pork (optional) \n- Olive oil \n- Garlic \n- Onions \n- Herbs (such as basil, oregano) \n- Salt \n- Pepper \nAllergens: \n- Gluten \n- Dairy (if cheese is added) \n- Eggs (if pasta contains egg) \nSpaghetti is a classic Italian dish made with long, thin strands of pasta, often served with a tomato-based sauce, and sometimes with ground meat or vegetables. It is typically seasoned with garlic, onions, and herbs, and often topped with grated cheese.",

    "Gnocchi \nIngredients: \n- Gnocchi pasta \n- Potatoes \n- Flour \n- Eggs \n- Butter \n- Parmesan cheese \n- Salt \nAllergens: \n- Gluten \n- Dairy \n- Eggs \nGnocchi is a traditional Italian dish made from soft potato dumplings, often served with a variety of sauces such as butter and sage or tomato sauce.",

    "Pru Cream Pasta \nIngredients: \n- Pasta \n- Heavy cream \n- Garlic \n- Parmesan cheese \n- Salt \n- Pepper \nAllergens: \n- Gluten \n- Dairy \n- Eggs (in pasta) \nPru cream pasta is a rich and creamy pasta dish made with a base of heavy cream, garlic, and parmesan, creating a velvety texture.",

    "Fish Pie \nIngredients: \n- White fish (e.g., cod or haddock) \n- Potatoes \n- Butter \n- Milk \n- Cheese \n- Leeks \n- Parsley \n- Flour \nAllergens: \n- Fish \n- Dairy \n- Gluten \nFish pie is a comforting British dish made with tender pieces of fish in a creamy sauce, topped with mashed potatoes and baked to golden perfection.",

    "Crab Linguine \nIngredients: \n- Linguine pasta \n- Crab meat \n- Olive oil \n- Garlic \n- Chili flakes \n- Lemon \n- Parsley \nAllergens: \n- Shellfish \n- Gluten \n- Dairy (if added) \nCrab linguine is a light, flavorful pasta dish made with succulent crab meat, garlic, and chili, with a zesty hint of lemon and a sprinkling of fresh parsley.",

    "Beef Stew with Rice \nIngredients: \n- Beef (chuck or stew meat) \n- Carrots \n- Potatoes \n- Onion \n- Beef broth \n- Rice \n- Herbs (such as thyme, bay leaves) \nAllergens: \n- None \nBeef stew with rice is a hearty and comforting dish made with tender beef, vegetables, and a flavorful broth, served alongside rice.",

    "Beef Curry \nIngredients: \n- Beef (cubed) \n- Curry powder \n- Coconut milk \n- Onion \n- Garlic \n- Ginger \n- Tomatoes \n- Rice \nAllergens: \n- Dairy (if added) \n- Soy (if soy sauce is used) \nBeef curry is a rich and aromatic dish featuring tender beef cooked in a flavorful curry sauce, often served with rice or bread.",

    "Pulled Pork \nIngredients: \n- Pork shoulder \n- BBQ sauce \n- Onion \n- Garlic \n- Apple cider vinegar \nAllergens: \n- Soy (in BBQ sauce) \n- Gluten (in buns, if served) \nPulled pork is a slow-cooked pork dish where the meat becomes tender and easily shredded, often served with barbecue sauce and sides like coleslaw.",

    "Honey-Glazed Ham \nIngredients: \n- Ham \n- Honey \n- Brown sugar \n- Dijon mustard \n- Cloves \nAllergens: \n- None \nHoney-glazed ham is a sweet and savory dish featuring ham glazed with a mixture of honey, brown sugar, and mustard, and then roasted to perfection.",

    "Roasted Chicken \nIngredients: \n- Whole chicken \n- Olive oil \n- Garlic \n- Lemon \n- Fresh herbs (such as rosemary and thyme) \nAllergens: \n- None \nRoasted chicken is a classic and delicious dish where a whole chicken is seasoned with herbs, garlic, and lemon, then roasted until golden and crispy.",

    "Duck Ragu with Pasta \nIngredients: \n- Duck meat \n- Pasta (such as pappardelle) \n- Tomatoes \n- Onion \n- Garlic \n- Red wine \n- Herbs (such as thyme, rosemary) \nAllergens: \n- Gluten \n- Dairy (if cheese is added) \nDuck ragu with pasta is a rich, flavorful dish featuring tender duck cooked in a savory tomato-based sauce, served over pasta.",

    "Ramen \nIngredients: \n- Ramen noodles \n- Broth (typically pork, chicken, or vegetable) \n- Soy sauce \n- Nori (seaweed) \n- Soft-boiled egg \n- Green onions \n- Bamboo shoots \nAllergens: \n- Gluten \n- Soy \n- Eggs \nRamen is a Japanese noodle soup consisting of savory broth, noodles, and various toppings such as eggs, vegetables, and meats.",

    "Onigiri \nIngredients: \n- Rice \n- Seaweed (nori) \n- Salt \n- Fillings (such as tuna, pickled plum, or salmon) \nAllergens: \n- Rice \n- Fish (if filled with seafood) \nOnigiri is a traditional Japanese rice ball, often filled with savory ingredients like pickled plums or fish and wrapped in a sheet of seaweed.",

    "Chicken Tempura \nIngredients: \n- Chicken breast \n- Tempura batter \n- Flour \n- Water \n- Oil (for frying) \nAllergens: \n- Gluten \n- Soy (if soy sauce is used) \nChicken tempura is a dish where chicken is dipped in a light, crispy tempura batter and deep-fried to golden perfection.",

    "Yakitori \nIngredients: \n- Chicken (typically thigh, breast, or skewered parts) \n- Soy sauce \n- Mirin \n- Sugar \n- Garlic \nAllergens: \n- Soy \nYakitori is a Japanese dish of skewered and grilled chicken, often served with a savory sweet glaze made from soy sauce, mirin, and sugar.",

    "Lemon Souffles \nIngredients: \n- Eggs \n- Lemon zest and juice \n- Sugar \n- Butter \n- Cream of tartar \n- Flour \nAllergens: \n- Eggs \n- Dairy \nLemon souffles are light and airy, made with eggs and lemon to create a sweet, tangy dessert that puffs up beautifully when baked.",

    "British Pancakes \nIngredients: \n- Flour \n- Eggs \n- Milk \n- Butter \n- Sugar \nAllergens: \n- Gluten \n- Dairy \n- Eggs \nBritish pancakes are thinner than American-style pancakes and often served with sugar and lemon juice or syrup.",

    "Carrot Cake \nIngredients: \n- Carrots \n- Flour \n- Eggs \n- Sugar \n- Baking powder \n- Cinnamon \n- Cream cheese (for frosting) \nAllergens: \n- Gluten \n- Dairy \n- Eggs \nCarrot cake is a moist, spiced cake made with grated carrots and often topped with rich cream cheese frosting.",

    "Banana Split \nIngredients: \n- Bananas \n- Ice cream (vanilla, chocolate, strawberry) \n- Chocolate syrup \n- Whipped cream \n- Nuts \n- Maraschino cherry \nAllergens: \n- Dairy \n- Nuts \nBanana split is a classic dessert made with bananas, ice cream, and toppings like whipped cream, nuts, and cherries.",

    "Flame-Kissed Steaks \nIngredients: \n- Steak (such as ribeye, sirloin, or filet) \n- Olive oil \n- Salt \n- Pepper \n- Herbs (such as rosemary or thyme) \nAllergens: \n- None \nFlame-kissed steaks are steaks grilled or seared over an open flame, giving them a smoky, charred exterior and tender interior.",

    "Molten Lava Delight \nIngredients: \n- Chocolate \n- Butter \n- Eggs \n- Sugar \n- Flour \n- Vanilla \nAllergens: \n- Dairy \n- Gluten \n- Eggs \nMolten Lava Delight is a decadent chocolate dessert with a warm, gooey center, often served with vanilla ice cream.",

    "Blazing Hearth Pizza \nIngredients: \n- Pizza dough \n- Tomato sauce \n- Cheese (mozzarella) \n- Pepperoni or other toppings \n- Olive oil \nAllergens: \n- Gluten \n- Dairy \n- Soy (in some sauces) \nBlazing Hearth Pizza is a pizza baked in a high-temperature oven, with a crispy crust and topped with cheese, tomato sauce, and various toppings.",

    "Blazing Bison Burger \nIngredients: \n- Bison patty \n- Burger bun \n- Lettuce \n- Tomato \n- Onion \n- Cheese (optional) \nAllergens: \n- Gluten \n- Dairy (if cheese is added) \nBlazing Bison Burger is a flavorful burger made with bison meat, served in a bun with traditional burger toppings.",

    "Molten Lava Pasta \nIngredients: \n- Pasta \n- Tomato sauce \n- Mozzarella cheese \n- Parmesan cheese \n- Garlic \nAllergens: \n- Gluten \n- Dairy \nMolten Lava Pasta features pasta served in a rich tomato sauce with melted mozzarella and parmesan, giving a cheesy, flavorful experience.",

    "Spicy Spinach Dip \nIngredients: \n- Spinach \n- Cream cheese \n- Sour cream \n- Garlic \n- Chili flakes \n- Parmesan cheese \nAllergens: \n- Dairy \nSpicy spinach dip is a creamy, spicy appetizer made with spinach, cream cheese, sour cream, and chili flakes, often served with crackers or bread.",

    "The Pyro Pizza \nIngredients: \n- Pizza dough \n- Tomato sauce \n- Mozzarella cheese \n- Spicy sausage \n- Jalapeños \nAllergens: \n- Gluten \n- Dairy \nThe Pyro Pizza is a fiery pizza topped with spicy sausage, jalapeños, and mozzarella, creating a bold, spicy flavor.",

    "Cook'n Go Gyros \nIngredients: \n- Pita bread \n- Chicken or lamb \n- Tzatziki sauce \n- Tomatoes \n- Lettuce \n- Onion \nAllergens: \n- Gluten \n- Dairy (in tzatziki) \nCook'n Go Gyros are a handheld Greek dish featuring seasoned meat (often lamb or chicken), served in pita bread with vegetables and a creamy tzatziki sauce.",

    "Roast Turkey \nIngredients: \n- Whole turkey \n- Butter \n- Fresh herbs (sage, thyme, rosemary) \n- Garlic \n- Onion \n- Lemon \n- Salt \n- Pepper \nAllergens: \n- Milk (if butter is used) \nRoast turkey is a centerpiece dish for festive occasions, offering tender, flavorful meat and crispy, golden skin. Stuffed or unstuffed, this dish is often served with traditional sides like gravy, cranberry sauce, and roasted vegetables.",

    "Pigs in Blankets \nIngredients: \n- Sausages \n- Puff pastry or bacon strips \nOptional: \n- Mustard \n- Honey glaze \n- Fresh herbs \nAllergens: \n- Wheat/Gluten \n- Pork \n- Milk (if pastry contains dairy) \nPigs in blankets are a savory snack or appetizer featuring juicy sausages wrapped in crispy pastry or bacon. Popular during festive celebrations, they pair beautifully with dipping sauces or as part of a larger meal.",

    "Fried Carp \nIngredients: \n- Fresh carp fillets \n- Flour \n- Eggs \n- Breadcrumbs \n- Salt \n- Pepper \n- Oil (for frying) \nAllergens: \n- Fish \n- Wheat/Gluten \n- Eggs \nFried carp is a crispy, golden-brown dish, traditionally enjoyed during holiday meals in many cultures. Lightly seasoned and coated in breadcrumbs, the fish is fried to perfection, delivering a tender and flavorful experience.",

    "Gingerbread + Cocoa \nIngredients: \n- Flour \n- Brown sugar \n- Molasses \n- Ginger \n- Cocoa powder \nAllergens: \n- Wheat/Gluten \n- Eggs \n- Milk\n Gingerbread + Cocoa combines the spiced, molasses-rich flavor of classic gingerbread with the rich depth of cocoa. Perfect as a cozy winter treat, this dish can be baked into cookies, cakes, or bars and paired with warm beverages."

];


const ps = document.querySelectorAll(".big-cards p");
for (let i = 0; i < texts.length; i++) {
    ps[i].innerText = texts[i]
}