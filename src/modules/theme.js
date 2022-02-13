const colorID = document.getElementById('colorID');
let slogan = document.querySelector('.slogan');

// on input, get value and save it as 'storedValue'
const changeColor = () => { 
    let userColor = colorID.value;
    localStorage.setItem('storedValue', slogan = userColor);
  };
  
  // if there is a value stored, update color picker and background color
  if(localStorage.storedValue) {
    document.getElementById('colorID').value = localStorage.storedValue;
    slogan.style.backgroundColor = localStorage.storedValue;
};

colorID.addEventListener('input', changeColor);

const colorChange = { changeColor };
export default colorChange;