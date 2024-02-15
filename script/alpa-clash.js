// function play() {
//   // step-1: hide the home screen. to hide the screen add the class hidden to the home section
//   const homeSection = document.getElementById('home-screen');
//   homeSection.classList.add('hidden');
//   // console.log(homeSection.classList)

//   // show the playground
//   const playgroundSection = document.getElementById('play-ground');
//   playgroundSection.classList.remove('hidden')
//   // console.log(playgroundSection.classList)
// }

function handlekeyboardButtonpress() {
  const playerPressed = event.key;
  // console.log('player pressed', playerPressed);

  // get the expected to press
  const currentAlphabetElement = document.getElementById('current-alphabet');
  const currentAlphaet = currentAlphabetElement.innerText;
  const expectedAlphabet = currentAlphaet.toLocaleLowerCase();
  console.log(playerPressed, expectedAlphabet);

  // check matche or not
  if (playerPressed === expectedAlphabet) {
    console.log('you get a point');
    // update score:
    // 1. get the current score
    const currentscoreElement = document.getElementById('current-score');
    const currentScoreText = currentscoreElement.innerText;
    const currentscore = parseInt(currentScoreText);
    console.log(currentscore);

    // 2. increase the score by 1
    const newscore = currentscore + 1;
    // console.log(newscore)

    // 3. show the updated score
    currentscoreElement.innerText = newscore;



    // start a new round
    removeBackgroundColorById(expectedAlphabet);
    continueGame();
  }
  else {
    console.log('you missed. you lost a life');
    // step -1: get the current Life number
    const currentLifeElement = document.getElementById('current-life');
    const currentLifeText = currentLifeElement.innerText;
    const currenLife = parseFloat(currentLifeText);
    
    // step -2: reduce the life count 
    const newLife = currenLife - 1;

    // step -3: display the updated life count
    currentLifeElement.innerText = newLife;
  }
}


// capture keyboard key press
document.addEventListener('keyup', handlekeyboardButtonpress)


function continueGame() {
  // step -1: generate a random alphabet 
  const alphabet = getARandomAlphabet();
  // console.log('your random alphabet', alphabet);

  // set randomly generated alphabet to the screen (show it)
  const currentAlphabetElement = document.getElementById('current-alphabet');
  currentAlphabetElement.innerText = alphabet;

  // set background color
  setBackgroundClorById(alphabet);

}


function play() {
  hideElementById('home-screen');
  showElementById('play-ground');
  continueGame()
}

