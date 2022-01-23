import FazerLunchMenuFi from '../assets/fazer-week-example-fi.json';
import FazerLunchMenuEn from '../assets/fazer-week-example-en.json';
const fazerCoursesFI = [];
const fazerCoursesEN = [];
/**
 * Extract course titles from sodexo menu JSON object
 * 
 * @param {string} menu -JSON Menu to be parsed
 */

/* console.log('Fazer' + Object.values(FazerLunchMenuFi.LunchMenus));
const parseFazerLunchMenuFi = (menu) => {
    const courses = Object.values(menu);
    for (const course of courses) {
        console.log(course.SetMenus[2].Meals[1].Name);
        fazerCoursesFI.push(course);
        /* coursesEN.push(course.title_en); *//*
    };
};
 parseFazerLunchMenuFi(FazerLunchMenuFi.LunchMenus); */

 const parseFazerLunchMenuFi = () => {
    const LunchMenus = FazerLunchMenuFi.LunchMenus;
    
  
    for (let i = 0; i < LunchMenus.length; i++) {
        fazerCoursesFI.push({
        SetMenus: [],
      }); 
      for (let j = 0; j < LunchMenus[i].SetMenus.length; j++) {
         fazerCoursesFI[i].SetMenus.push({
          Name: LunchMenus[i].SetMenus[j].Name,
          Meals: [], 
        });
        for (let n = 0; n < LunchMenus[i].SetMenus[j].Meals.length; n++) {
             fazerCoursesFI[i].SetMenus[j].Meals.push(
              LunchMenus[i].SetMenus[j].Meals[n]
            );
            /* fazerCoursesFI.push(
                LunchMenus[i].SetMenus[j].Meals[n]
            ); */
        };
      }
    }
    console.log('fi menu' + fazerCoursesFI);
  }; 

  const parseFazerLunchMenuEn = () => {
    const LunchMenus2 = FazerLunchMenuEn.LunchMenus;
    
  
    for (let i = 0; i < LunchMenus2.length; i++) {
        fazerCoursesEN.push({
        SetMenus: [],
      }); 
      for (let j = 0; j < LunchMenus2[i].SetMenus.length; j++) {
         fazerCoursesEN[i].SetMenus.push({
          Name: LunchMenus2[i].SetMenus[j].Name,
          Meals: [], 
        });
        for (let n = 0; n < LunchMenus2[i].SetMenus[j].Meals.length; n++) {
             fazerCoursesEN[i].SetMenus[j].Meals.push(
              LunchMenus2[i].SetMenus[j].Meals[n]
            );
            /* fazerCoursesFI.push(
                LunchMenus[i].SetMenus[j].Meals[n]
            ); */
        };
      }
    }
    console.log('en menu' + fazerCoursesEN);
  }; 


  parseFazerLunchMenuFi();
  parseFazerLunchMenuEn();

const FazerData = { fazerCoursesEN, fazerCoursesFI };
export default FazerData;