'use strict';


let secretNumber = Math.trunc (Math.random () * 20) + 1;
let score =20;
let highscore = 0;

 
document.querySelector('.check').addEventListener('click' , function () {
   const guess = Number (document.querySelector('.guess').value);
   console.log (guess, typeof guess);

// when when there is no input
  if (!guess) {
    document.querySelector('.message').textContent ='⛔ no number!';

// when player wins 
  }else if(guess === secretNumber){
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('.number').textContent = secretNumber;

  document.querySelector ('body').style.backgroundColor = '#60b347';
  document.querySelector ('.number').style.width = '30rem';

  if (score > highscore) {
    highscore = score;
    document.querySelector('.highscore') .textContent = highscore;
  }
  
//when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = guess> secretNumber ? '↗ too high!' : '↘ too low!' ;
      score --; 
      document.querySelector('.score').textContent = score;
    }else {
      document.querySelector('.message').textContent = '💥You lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }

// // when guess is too high
//   } else if (guess > secretNumber){
//     if (score > 1) {
//     document.querySelector('.message').textContent = '↗ too high!';
//     score --; 
//     document.querySelector('.score').textContent = score;
//     }else {
//       document.querySelector('.message').textContent = '💥You lost the game';
//       document.querySelector('.score').textContent = 0;
//     }

// // when guess is too low
//   } else if (guess < secretNumber){
//     if (score > 1) {
//       document.querySelector('.message').textContent = '↘ too low!';
//       score --; 
//       document.querySelector('.score').textContent = score;
//       }else {
//         document.querySelector('.message').textContent = '💥You lost the game';
//         document.querySelector('.score').textContent = 0;
//       }
//   }
});
document.querySelector('.again').addEventListener('click', function(){
   score = 20;
   secretNumber = Math.trunc (Math.random () * 20) + 1;

   document.querySelector('.message').textContent ='Start guessing...';
   document.querySelector('.score').textContent = score;
   document.querySelector('.number').textContent ='?';
   document.querySelector('.guess').value = '';

   document.querySelector ('body').style.backgroundColor = '#151615';
   document.querySelector ('.number').style.width = '15rem';

} );