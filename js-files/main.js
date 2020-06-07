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

const violin = {
    strings: 'G D A E',
    pitch: 442,
    size: 4/4,
    dateOfManufacture: 2017,
    condition: 'perfect',
    owner: {
        name: 'Dora Pindur',
        orchestra: 'Leopoldinum',
        position: 'musician',
    },
    violinMaker: 'Adam Skubisz',
    label: (year) => {
        console.log(`Adam Skubisz, Bielsko-Biała ${year}`)
    },
}
console.log(violin);
console.log(violin.label(2017));

const car = {
    type: 'passenger car',
    make: 'Ford',
    model: 'Focus 1',
    yearOfManufacture: 2002,
    navigation: (destination) => {
        console.log(`Going to: ${destination}`)
    },
    engine: 1.6,
    fuel: 'gasoline',
}

console.log(car);
console.log(car['model']);
console.log(car.navigation('Gdańsk'));

const bemSong = {
    title: 'Moje serce to jest muzyk',
    author: 'Wojciech Młynarski',
    composer: 'Jacek Mikuła',
    year: 1980,
    performer: 'Ewa Bem'
}

const mySound = document.getElementById("sound--js");   
var handButton = document.getElementById("play-bem--js"); 
handButton.addEventListener("click", function(togglePlay) {
    if (mySound.paused) {
        mySound.play();
    }
    else {
        mySound.pause();
    }
    console.log(bemSong);
} );


const menuButton = document.querySelector('.menu-button--js');
menuButton.addEventListener('click', () => {
    const navOpen = document.querySelector('.top-navigation--js');
    navOpen.classList.toggle('top-navigation--open');
})

const clickScheme = document.querySelector('.scheme--js');
clickScheme.addEventListener('click', () => {
    const scaleScheme = document.querySelector('.scheme--js');
    scaleScheme.classList.toggle('grid-section__scheme--clicked');
})

//change mode

function buttonText(selectorContent, newContent) {
    const myElement = document.querySelector(selectorContent);
    myElement.innerHTML = newContent;
}
buttonText('.change-mode__button--js', 'tryb jasny')

let isLight = false;

const changeMode = document.querySelector('.change-mode__button--js')
changeMode.addEventListener('click', () => {
    if (isLight) {
        document.documentElement.style.setProperty('--mode-background', 'rgba(83, 39, 119, 0.253)');
        document.documentElement.style.setProperty('--mode-heading', '#dddddd');
        document.documentElement.style.setProperty('--mode-text', '#dddddd');
        document.documentElement.style.setProperty('--mode-button-label', 'rgb(58, 0, 83)');
        document.documentElement.style.setProperty('--mode-button', '#dddddd');
        document.documentElement.style.setProperty('--mode-text-shadow', 'black 0.2em 0.2em 0.2em');
        isLight = false;
        buttonText('.change-mode__button--js', 'tryb jasny')

    }
    else {
        document.documentElement.style.setProperty('--mode-background', '#dddddd');
        document.documentElement.style.setProperty('--mode-heading', 'rgb(58, 0, 83)');
        document.documentElement.style.setProperty('--mode-text', 'rgb(58, 0, 83)');
        document.documentElement.style.setProperty('--mode-button-label', '#dddddd');
        document.documentElement.style.setProperty('--mode-button', 'rgb(58, 0, 83)');
        document.documentElement.style.setProperty('--mode-text-shadow', 'none');

        isLight = true;
        buttonText('.change-mode__button--js', 'tryb zwykły')
    }
console.log('działa?');
})

    