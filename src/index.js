
// listen to keys pressed
// if keys pressed = lit (no typos allowed)
// print alert 

let keys =[];

document.addEventListener('keydown', (evt) =>{
  console.log(evt);

  const key = evt.key.toLowerCase();

  keys.push(key);
  console.log(keys);

  if(keys.join('') == 'lit'){
    alert('secret word!');
    keys = [];
  }
});


// listen to doubleclicks in a div
// print x and y cordinates of that doubleclick in to a list 

const clickList = document.getElementById('dblclicks');
const dblclickContainer = document.getElementById('dblclick-container');
let xCord, yCord;

const logDoubleClick = (evt) => {
  console.log(evt);
  const listItem = document.createElement('li');
  xCord = evt.clientX;
  yCord = evt.clientY;
  console.log(listItem);
  listItem.textContent = `x: ${xCord} y: ${yCord}`;
  clickList.appendChild(listItem);
};

dblclickContainer.ondblclick = logDoubleClick;


// touch dblclickContainer
// console log some text

dblclickContainer.addEventListener('touchstart', (evt) => {
  console.log('you touched the screen');
});


//timer for 15sec 
//alert hurry up 

const hurryUp = () =>{
  alert("hurry up!");
};
const timer = setTimeout(hurryUp, 15000);



// idle timer for 15 
// dont move your mouse, click keyboard for 15 sec
// alert hurry up

const idleTime = 0;

const idleTimer = () => {

  const timer = setTimeout(timerIncrement, 15000);

  document.addEventListener('mousemove', () =>{
    idleTime = 0;
  });
  document.addEventListener('keydown', () =>{
    idleTime = 0;
  });
};

const timerIncrement = () =>{
  idleTime += 1;
  if (idleTime == 1){
    hurryUp();
  };
};  

idleTimer();