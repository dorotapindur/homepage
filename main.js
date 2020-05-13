const myName = "Dora";
const age = "36";


console.log(`Cześć! Mam na imię ${myName} i mam ${age} lat(a). To jest moja testowa strona z notatkami WTF.`);
console.log('Na razie piszę sobie coś w ramach zadania domowego.');
console.log('Chciałabym, żeby program rozróżniał przy podawaniu wieku "lat"/"lata", ale jeszcze nie wiem, jak to zrobić');

const appearingParagraph = document.querySelector('.inner-section__text--js');
appearingParagraph.innerHTML = `W tym miejscu pojawia się paragraf wstawiony przez JS - jest widoczny w DOM, ale nie w kodzie źródłowym.`;

function calculate(myNumber) {
    console.log(`Podana liczba to ${myNumber}`)
    return myNumber*7
}

const myResult = calculate(age);
console.log(`Wynik mnożenia *7 to ${myResult}`);


let myNumber = "3";
const timesFive = (myNumber) => {
    console.log(`Podana liczba to ${myNumber}`)
    return myNumber*5;
}
let timesFiveResult = timesFive(myNumber);
console.log(`Wynik mnożenia liczby ${myNumber} razy 5 wynosi ${timesFiveResult}`);


myNumber = "5";
timesFiveResult = timesFive(myNumber);
console.log(`Wynik mnożenia liczby ${myNumber} razy 5 wynosi ${timesFiveResult}`);


function greet(age, myName) {
    console.log(`Nazywam się ${myName}, mam ${age} lat(a) i sprawdzam właśnie, czy moja funkcja pokaże mi ten tekst`);
}
greet(74, 'Franio');
greet(36, "Dora");


const weekNumber = '5';

function createContent(querySelectorContent, content) {
    const element = document.querySelector(querySelectorContent);
    element.innerHTML = content;
}
createContent('.inner-section__another-text--js', `A to jest tekst wstawiony za pomocą funkcji o nazwie createContent. W zasadzie ten tekst powinien być w ${weekNumber} tygodniu. Numer tygodnia jest określony za pomocą zmiennej const weekNumber = '5'.`);
createContent('.section__welcome-heading--js', `Cześć! Witam na moim poligonie eksperymentalnym.`);

console.log('Więcej funkcji liczących coś prostego:');


const timesFour = (someNumber) => {
    inputNumber = someNumber;
    console.log(`podana liczba to ${inputNumber}`);
    timesFourResult = someNumber*4;
    console.log(`wynik mnożenia liczby ${inputNumber} razy 4 to: ${timesFourResult}`);
}

timesFour(5);


function calculateMultiplication(firstInputNumber, secondInputNumber) {
    console.log(`podane liczby to ${firstInputNumber} i ${secondInputNumber}`);
    multiplicationResult = firstInputNumber*secondInputNumber;
    console.log(`wynik mnożenia to ${multiplicationResult}`);
}

calculateMultiplication(6, 8);
calculateMultiplication(2, 2);
calculateMultiplication(12, 3);