const themeColorPicker = document.querySelector('#theme-picker')
const boxContainer = document.querySelector('.box-container');

themeColorPicker.addEventListener('input', event => {
  boxContainer.style.setProperty('--theme', event.target.value);
})

let root = document.querySelector(':root');
let colorSchemeButton = document.querySelector('.theme-picker-button');

colorSchemeButton.addEventListener('click', event => {
  event.preventDefault();
  root.classList.toggle('dark');
})