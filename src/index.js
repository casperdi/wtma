import LunchMenu from '../lunchmenu.json';
console.log(LunchMenu);
let itemEN;
let itemFI;
const coursesFI = [];
const coursesEN = [];

for (let i = 1; i <= 9; i++) {
  
  coursesFI.push( LunchMenu.courses[i].title_fi);
  console.log(coursesFI);
  
  coursesEN .push(LunchMenu.courses[i].title_en);
  console.log(coursesEN);
  
};

document.getElementById('item').innerHTML = coursesFI;
/* document.getElementById('item').innerHTML = coursesEN; */

const langChange = () => {
  if(document.getElementById('item').innerHTML == coursesEN || document.getElementById('item').innerHTML == itemEN){
    document.getElementById('item').innerHTML = coursesFI;
    
  } else if (document.getElementById('item').innerHTML == coursesFI || document.getElementById('item').innerHTML == itemFI ){
    document.getElementById('item').innerHTML = coursesEN;
    
  }
};

const sortMenuAsc = () => {
                  
  if(document.getElementById('item').innerHTML == coursesEN){
    coursesEN.sort();
    document.getElementById('item').innerHTML = coursesEN;
    
    
  } else if (document.getElementById('item').innerHTML == coursesFI ) {
    coursesFI.sort();
    document.getElementById('item').innerHTML = coursesFI;
  }


};
const sortMenuDesc = () => {
              
  if(document.getElementById('item').innerHTML == coursesEN){
   coursesEN.sort();
   coursesEN.reverse();
   document.getElementById('item').innerHTML = coursesEN;
     
   } else if (document.getElementById('item').innerHTML == coursesFI){
     coursesFI.sort();
     coursesFI.reverse();
     document.getElementById('item').innerHTML = coursesFI;
   } 
 };

 const random = () => {

  if( document.getElementById('item').innerHTML == itemEN || document.getElementById('item').innerHTML == coursesEN){
    itemEN = coursesEN[Math.floor(Math.random()*coursesEN.length)];
    document.getElementById('item').innerHTML = itemEN; 
  } else {
    itemFI = coursesFI[Math.floor(Math.random()*coursesFI.length)];
    document.getElementById('item').innerHTML = itemFI; 
  }
};

document.getElementById('lang').addEventListener('click', langChange);
document.getElementById('sorta').addEventListener('click', sortMenuAsc);
document.getElementById('sortd').addEventListener('click', sortMenuDesc);
document.getElementById('random').addEventListener('click', random);
