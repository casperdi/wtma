import SodexoData from './modules/sodexo-data';
SodexoData;

let language = 'fi';
let currentMenu = SodexoData.coursesFI;



/**
 * Render menu courses on page
 */
const renderMenu = () => {
  const ulElement = document.getElementById('item');
  ulElement.innerHTML = ' ';
  for (const item of currentMenu) {
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
    currentMenu = SodexoData.coursesEN;
    console.log(language);
  } else {
    language = 'fi';
    currentMenu = SodexoData.coursesFI;
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
  
  renderMenu();
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
    renderMenu();
  });
};
init();