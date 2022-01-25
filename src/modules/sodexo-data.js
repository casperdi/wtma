import SodexoLunchMenu from '../assets/sodexo-lunch-menu.json';
const coursesFi = [];
const coursesEn = [];
/**
 * Extract course titles from sodexo menu JSON object
 * 
 * @param {string} menu -JSON Menu to be parsed
 */
const parseSodexoLunchMenu = (menu) => {
    const courses = Object.values(menu);
    for (const course of courses) {
        coursesFi.push(course.title_fi);
        coursesEn.push(course.title_en);
    };
};
parseSodexoLunchMenu(SodexoLunchMenu.courses);

const SodexoData = { coursesFi, coursesEn };
export default SodexoData;