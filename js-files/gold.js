alert('Czy jesteś gotów na oświecenie?')


const menuButton = document.querySelector('.menu-button--js');
menuButton.addEventListener('click', () => {
    const navOpen = document.querySelector('.top-navigation--js');
    navOpen.classList.toggle('top-navigation--open');
})