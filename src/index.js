 import LunchMenu from './assets/fazer-week-example.json';
 
 const Menu =
[
  {name: 'Lingonberry jam', price: 4.00},
  {name: 'Mushroom and bean casserole', price: 5.50},
  {name: 'Chili-flavoured wheat', price: 3.00},
  {name: 'Vegetarian soup', price: 4.80},
  {name: 'Pureed root vegetable soup with smoked cheese', price: 8.00}
];

/**
 * Validate array names and return true/false 
 * @param {Array} array 
 */
const validateMealName = (array) => {
  const regex = new RegExp(/^[A-ZÖÄÅ]{1}[a-zöäå]{4,64}([-,\\\/()\w\d\s]+)$/);
  let results = array.map((dish) => dish.name);

   results.forEach((result) => {
    console.log("DISH: " + result + " REGEX: " + regex.test(result));
  });
  console.log(results);
};

/**
 * Sort menu in desc order
* @param {Array} array 
 */
const sortMenu = (array) => {
  let sortedMenu = array.sort((a, b) => {
    return b.price - a.price;
  });
  console.log(sortedMenu);
};

/**
 * Raise all prices of the array by 15%
 * @param {Array} array 
 */
const raisePrice = (array) => {
  let raisedPrices = array.map(price => price.price*1.15);
   console.log(raisedPrices);
};

/**
 * Calculate the cost of the whole menu
 * @param {Array} array 
 */
const wholeMenu = (array) => {
  console.log(array.reduce((a, b) => ({price: a.price + b.price})));
};

/**
 * Get only vegan meals form fazer-week-example.json file
 */
const veganMeals = () => {
  const LunchMenus = LunchMenu.LunchMenus;
  let vegMeals = [];

  for (let i = 0; i < LunchMenus.length; i++) {
    vegMeals.push({
      SetMenus: [],
    });
    for (let j = 0; j < LunchMenus[i].SetMenus.length; j++) {
      vegMeals[i].SetMenus.push({
        Name: LunchMenus[i].SetMenus[j].Name,
        Meals: [],
      });
      for (let n = 0; n < LunchMenus[i].SetMenus[j].Meals.length; n++) {
        if (LunchMenus[i].SetMenus[j].Meals[n].Diets.includes("Veg"))
          vegMeals[i].SetMenus[j].Meals.push(
            LunchMenus[i].SetMenus[j].Meals[n]
          );
      }
    }
  }
  console.log(vegMeals);
};


validateMealName(Menu);
sortMenu(Menu);
raisePrice(Menu);
wholeMenu(Menu);
veganMeals();