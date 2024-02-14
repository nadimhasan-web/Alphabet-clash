function getRandomAlphabet(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    // random
    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);
    // alphabet
    const alphabet = alphabets[index];
    return alphabet;
    // set letter bg color
}
function setLetterBg(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}
function removeLetterBg(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}
// score
function getElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementText = element.innerText;
    const value = parseInt(elementText);
    return value;
}

function setElementValueById(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}