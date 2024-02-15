// hide element
function hideElementById(elementId){
    const hideElement = document.getElementById(elementId);
    hideElement.classList.add('hidden');
}
// show element
function showElementById(elementId){
    const showElement = document.getElementById(elementId);
    showElement.classList.remove('hidden');
}
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
// get element text
function getElementTextById(elementId){
    const element = document.getElementById(elementId);
    const text = element.innerText;
    return text;
}
// score
function getElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementText = element.innerText;
    const value = parseInt(elementText);
    return value;
}
// set element value by Id
function setElementValueById(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}