import SodexoLunchMenu from '../assets/sodexo-lunch-menu.json';
const coursesFI = [];
const coursesEN = [];
/**
 * Extract course titles from sodexo menu JSON object
 * 
 * @param {string} menu -JSON Menu to be parsed
 */
const parseSodexoLunchMenu = (menu) => {
    const courses = Object.values(menu);
    for (const course of courses) {
        coursesFI.push(course.title_fi);
        coursesEN.push(course.title_en);
    };
};
parseSodexoLunchMenu(SodexoLunchMenu.courses);

const SodexoData = { coursesFI, coursesEN };
export default SodexoData;