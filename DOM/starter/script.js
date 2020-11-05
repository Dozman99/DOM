var scores, roundScore, activePlayer, gamePlaying;
init();

function init() {
  scores = [0, 0];
  roundScore = 0;
  activePlayer = 0;

  document.querySelector('.dice').style.display = 'none';
  document.getElementById('score--0').textContent = '0';
  document.getElementById('score--1').textContent = '0';
  document.getElementById('current--0').textContent = '0';
  document.getElementById('current--1').textContent = '0';
  document.getElementById('name--0').textContent = 'player 1';
  document.getElementById('name--1').textContent = 'player 2';

  document.querySelector('.player--0').classList.remove('player--active');
  document.querySelector('.player--1').classList.remove('player--active');
  document.querySelector('.player--0').classList.add('player--active');
  document.querySelector('.player--0').classList.remove('player--winner');
  document.querySelector('.player--1').classList.remove('player--winner');
}

// document.querySelector('#current--0').textContent = dice;
// in javascript you can add a string to a Number
// document.querySelector('#current--' + activePlayer).textContent = dice;
/*to show we can insert HTML
document.querySelector('#current--' + activePlayer).innerHTML =
   '<em>' + dice + '</em>';*/
/////////////////
/*we can also do it like this

var x =document.querySelector('#score-0').textContent; 

*/

// the above is using "style" as the method, "display" as the property and "none" as the value of the CSS property
/////////////////////////////////EVENT LISTENER

// Note that the "btn" before the "btn--roll" is ment to be ignored
document.querySelector('.btn--roll').addEventListener('click', function () {
  if (gamePlaying) {
    // 1. Random number
    var dice = Math.floor(Math.random() * 6) + 1;
    //   2. Display the result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'none';
    diceDOM.src = `dice-${dice}.png`;
    //3. update the round score IF the rolled number was NOT a 1
    if (dice !== 1) {
      //Add score
      roundScore += dice;
      document.querySelector(
        `#current--${activePlayer}`
      ).textContent = roundScore;
    } else {
      nextPlayer();
    }
  }
});

// event listener on the MDN website just Google it
//Note a callback function is a function being called in another function

/* how I can return a function through event listener
function bread() {
  return 'I love bread';
}
document.querySelector('.btn--roll').addEventListener('click', bread);
*/

document.querySelector('.btn--hold').addEventListener('click', function () {
  if (gamePlaying) {
    //add current score to global score
    scores[activePlayer] += roundScore;
    // update the UI
    document.querySelector('#score--' + activePlayer).textContent =
      scores[activePlayer];
    // check if the player won the game
    if (scores[activePlayer] >= 20) {
      document.querySelector('#name--' + activePlayer).textContent = 'Winner!';

      document.querySelector('.player--0').classList.remove('player--active');
      document
        .querySelector('.player--' + activePlayer)
        .classList.add('.player--winner');
      document
        .querySelector('.player--' + activePlayer)
        .classList.remove('.player--active');
      gamePlaying = false;
    } else {
      // next player
      nextPlayer();
    }
  }
});

function nextPlayer() {
  //next player
  // if active player is 0 THEN  active player is 1 ELSE player is 0
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  roundScore = 0;

  document.getElementById('current--0').textContent = '0';
  document.getElementById('current--1').textContent = '0';

  document.querySelector('.player--0').classList.toggle('player--active');
  document.querySelector('.player--1').classList.toggle('player--active');

  // document.querySelector('.player--0').classList.remove('player--active');
  // document.querySelector('.player--1').classList.add('player--active');

  diceDOM.style.display = 'none';
}

document.querySelector('.btn--new').addEventListener('click', init);
