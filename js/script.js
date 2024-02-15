function continueGame(){
    const alphabet = getRandomAlphabet();
    const currentLetter =document.getElementById('letter');
    currentLetter.innerText = alphabet;
    // letter bg
    setLetterBg(alphabet);
}

function handleButtonPress(event){
    const playerPressed = event.key;
    if(playerPressed === 'Escape'){
        gameOver();
    }
    // 
    const currentAlphabet = document.getElementById('letter');
    const currentAlphabetElement = currentAlphabet.innerText;
    const expectedAlphabet = currentAlphabetElement.toLocaleLowerCase();
    // check
    if(playerPressed === expectedAlphabet){
        // score
        const score = getElementValueById('current_score');
        const newScore = score + 1;
        setElementValueById('current_score', newScore);
        removeLetterBg(expectedAlphabet);
        continueGame();
    }else{
        // current life
        const life = getElementValueById('current_life');
        const newLife = life - 1;
        setElementValueById('current_life', newLife);

        if(newLife === 0){
            gameOver();
        }
    }
}
document.addEventListener('keyup', handleButtonPress);
// play again
function playAgain(){
    hideElementById('score');
    showElementById('play_ground');
    // reset value
    setElementValueById('current_life', 5);
    setElementValueById('current_score', 0);
}
// 
function play(){
    hideElementById('home')
    showElementById('play_ground');
    // reset value
    continueGame();
}
// game over
function gameOver(){
    hideElementById('play_ground');
    showElementById('score');
    // update final score
    const lastScore = getElementValueById('current_score');
    setElementValueById('last_score', lastScore)
    // current alphabet
    // const currentLetter = getElementTextById('letter');
    // console.log(currentLetter);
}

