function continueGame(){
    const alphabet = getRandomAlphabet();
    console.log('your alphabet is :', alphabet);
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
    console.log('player pressed:',playerPressed);
    // 
    const currentAlphabet = document.getElementById('letter');
    const currentAlphabetElement = currentAlphabet.innerText;
    const expectedAlphabet = currentAlphabetElement.toLocaleLowerCase();
    console.log(playerPressed, expectedAlphabet);
    // check
    if(playerPressed === expectedAlphabet){
        console.log('you get a point');
    }else{
        console.log('you missed a point');
    }
}
document.addEventListener('keyup', handleButtonPress);