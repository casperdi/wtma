import FazerData from './modules/fazer-data';
import { fetchData } from './modules/network';
import SodexoData from './modules/sodexo-data';
SodexoData;
FazerData;

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./service-worker.js').then(registration => {
      console.log('SW registered: ', registration);
    }).catch(registrationError => {
      console.log('SW registration failed: ', registrationError);
    });
  });
}

let language = 'fi';
// let currentMenu = SodexoData.coursesFI;

console.log(SodexoData);
console.log(FazerData);
/**
 * Render menu courses on page
 */
const renderMenu = (data, targetId) => {
  const ulElement = document.getElementById(targetId);
  ulElement.innerHTML = ' ';
  for (const item of data) {
    const listElement = document.createElement('li');
    listElement.textContent = item;
    ulElement.appendChild(listElement);
  }
};

/**
 * Toggle between en/fi
 */
const langChange = () => {
  if (language === 'fi') {
    language = 'en';
    renderMenu(SodexoData.coursesEn, 'sodexo');
    renderMenu(FazerData.coursesEn, 'fazer');
    console.log(language);
  } else {
    language = 'fi';
    renderMenu(SodexoData.coursesFi, 'sodexo');
    renderMenu(FazerData.coursesFi, 'fazer');
  }
};

/**
 * Sort alphabetically
 * 
 * @param {Array} courses menu array
 * @param {String} order 'asc'/'desc'
 * @returns {Array} sorted menu
 */
const sortCourses = (courses, order = 'asc') => {
  const sortedCourses = courses.sort();
  if (order === 'desc') {
    sortedCourses.reverse();
  }
  return sortedCourses;
};


/**
 * Picks a random dish
 * 
 * @param {Array} courses 
 * @returns {String} random dish
 */
const randomDish = (courses) => {
  const randomIndex = Math.floor(Math.random() * courses.length);
  return courses[randomIndex];
};



const init = () => {

  // renderMenu(SodexoData.coursesFi, 'sodexo');

  // TODO: update to real data, no need of proxy

  const sodexoUrl = 'https://www.sodexo.fi/ruokalistat/output/weekly_json/152';
  fetchData(sodexoUrl).then(data =>{
    console.log(JSON.parse(data.contents));
  });
  
  // Render fazer
  fetchData(FazerData.dataUrlFi, true).then(data =>{
    //TODO: Move JSOM parse stuff to network module??
    // remeber adapter pattern
    const menuData = JSON.parse(data.contents);
    //TODO: how to set to  correct day
    const courses = FazerData.parseDayMenu(menuData.LunchMenus, 1);
    renderMenu(courses, 'fazer');

  });
  // Event listeners for buttons
  document.getElementById('lang').addEventListener('click', () => {
    langChange();
    renderMenu();
  });
  document.getElementById('random').addEventListener('click', () => {
    alert(randomDish(currentMenu));
  });
  document.getElementById('sorta').addEventListener('click', () => {
    currentMenu = sortCourses(currentMenu, 'desc');
    // TODO fix sorting for both restaurants
    // renderMenu();
  });
};
init();