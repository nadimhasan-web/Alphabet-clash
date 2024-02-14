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