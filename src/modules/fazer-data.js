// TODO: how to get menu for correct day  (date object)

import { todayISODate } from './tools';





const dataUrlFi =`https://www.foodandco.fi/api/restaurant/menu/week?language=fi&restaurantPageId=270540&weekDate=${todayISODate}`;
const dataUrlEn =`https://www.foodandco.fi/api/restaurant/menu/week?language=en&restaurantPageId=270540&weekDate=${todayISODate}`;




/**
 * Parses Fazer json data to simple array of strings
 * 
 * @param {Array} lunchMenus LunchMenu data
 * @param {Number} dayOfWeek 0-6
 * @returns {Array} daily menu
 */
const parseDayMenu = (lunchMenus, dayOfWeek) => {
  const dayMenu = lunchMenus[dayOfWeek].SetMenus.map(setMenu => {
    const name = setMenu.Name;
    let meals = '';
    // TODO Clean output
    for (const meal of setMenu.Meals){
      meals += meal.Name + ', ';
    };
    return name ? name + ': ' + meals : meals;
  });
  return dayMenu;
};

// console.log(parseDayMenu(FazerLunchMenuFi.LunchMenus, 0));

// const coursesFi = parseDayMenu(FazerLunchMenuFi.LunchMenus, 0);
// const coursesEn = parseDayMenu(FazerLunchMenuEn.LunchMenus, 0);

const FazerData = {parseDayMenu, dataUrlFi, dataUrlEn};
export default FazerData;   