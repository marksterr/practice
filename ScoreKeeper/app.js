let scoreOne = 0;
let scoreTwo = 0;
const score = document.querySelector('h1');
const buttonOne = document.querySelector('#buttonone');
const buttonTwo = document.querySelector('#buttontwo');
const resetButton = document.querySelector('#resetbutton');

buttonOne.addEventListener('click', function(e){
  e.preventDefault();
  scoreOne++;
  score.innerText = `${scoreOne} to ${scoreTwo}`;
});

buttonTwo.addEventListener('click', function(e){
  e.preventDefault();
  scoreTwo++;
  score.innerText = `${scoreOne} to ${scoreTwo}`;
});

resetButton.addEventListener('click', function(e){
  scoreOne = 0;
  scoreTwo = 0;
  score.innerText = `${scoreOne} to ${scoreTwo}`;
});