const myName = "Dora";
const age = "36";


console.log(`Cześć! Mam na imię ${myName} i mam ${age} lat(a). To jest moja testowa strona z notatkami WTF.`);
console.log('Na razie piszę sobie coś w ramach zadania domowego.');
console.log('Chciałabym, żeby program rozróżniał przy podawaniu wieku "lat"/"lata", ale jeszcze nie wiem, jak to zrobić');

const appearingParagraph = document.querySelector('.inner-section__text--js');
appearingParagraph.innerHTML = `W tym miejscu pojawia się paragraf wstawiony przez JS - jest widoczny w DOM, ale nie w kodzie źródłowym`;