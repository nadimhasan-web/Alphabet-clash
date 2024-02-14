function continueGame(){
    const alphabet = getRandomAlphabet();
    // console.log('your alphabet is :', alphabet);
    // 
    const currentLetter =document.getElementById('letter');
    currentLetter.innerText = alphabet;
    // letter bg
    setLetterBg(alphabet);
}

function play(){
    // hide home screen
    const homeScreen = document.getElementById('home');
    homeScreen.classList.add('hidden');
    // add play ground screen
    const playGroundScreen = document.getElementById('play_ground');
    playGroundScreen.classList.remove('hidden');
    continueGame();
}
function handleButtonPress(event){
    const playerPressed = event.key;
    // console.log('player pressed:',playerPressed);
    // 
    const currentAlphabet = document.getElementById('letter');
    const currentAlphabetElement = currentAlphabet.innerText;
    const expectedAlphabet = currentAlphabetElement.toLocaleLowerCase();
    // console.log(playerPressed, expectedAlphabet);
    // check
    if(playerPressed === expectedAlphabet){
        console.log('you get a point');
        // score
        const score = getElementValueById('current_score');
        const newScore = score + 1;
        setElementValueById('current_score', newScore);

        // const currentScoreElement = document.getElementById('current_score');
        // const scoreText = currentScoreElement.innerText;
        // const score = parseInt(scoreText);
        // console.log(scoreText);
        // // increase score
        // const newScore = score + 1;
        // // show update score
        // currentScoreElement.innerText = newScore;
        // new round
        console.log('you pressed correctly', expectedAlphabet);
        removeLetterBg(expectedAlphabet);
        continueGame();
    }else{
        console.log('pressed the wrong alphabet');
        // current life
        const life = getElementValueById('current_life');
        const newLife = life - 1;
        setElementValueById('current_life', newLife);

        // const currentLifeElement = document.getElementById('current_life');
        // const currentLife = currentLifeElement.innerText;
        // const life = parseInt(currentLife);
        // // decrease life
        // const newLife = life - 1;
        // // show life
        // currentLifeElement.innerText = newLife;
    }
}
document.addEventListener('keyup', handleButtonPress);