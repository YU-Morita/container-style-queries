const themeColorPicker = document.querySelector('#theme-picker')
// const boxContainer = document.querySelector('.box-container');
const boxContainer = document.querySelector('body');

themeColorPicker.addEventListener('input', event => {
  event.preventDefault();
  boxContainer.style.setProperty('--theme', event.target.value);
})

let root = document.querySelector(':root');
let colorSchemeButton = document.querySelector('.theme-picker-button');

colorSchemeButton.addEventListener('click', event => {
  event.preventDefault();
  root.classList.toggle('dark');
})