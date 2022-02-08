import { todayISODate } from './tools';

const dataUrlWeekly = 'https://www.sodexo.fi/ruokalistat/output/weekly_json/152';
const dataUrlDaily = `https://www.sodexo.fi/ruokalistat/output/daily_json/152/${todayISODate}`;

/**
 * Extract course titles from sodexo menu JSON object
 * 
 * @param {string} menu -JSON Menu to be parsed
 * @param {string} lang -ui language
 * 
 * @returns {Array} daily menu
 */
const parseDailyMenu = (menu, lang = 'fi') => {
  const courses = Object.values(menu);
  const dailyMenu = [];
  for (const course of courses) {
    if (lang === 'en') {
      dailyMenu.push(course.title_en);
    } else {
      dailyMenu.push(course.title_fi);
    }
  };
  return dailyMenu;
};

const SodexoData = { dataUrlDaily, dataUrlWeekly, parseDailyMenu };
export default SodexoData;