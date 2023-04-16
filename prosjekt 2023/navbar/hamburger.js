//Hamburger meny
//henter elementer fra DOM
const burgerEl = document. querySelector('.fa-bars')
const navEl = document. querySelector('.nav')

//Når du klikker på burgeren vil funksjonen showNav kalles
burgerEl.addEventListener('click',showNav)

function showNav(){

  navEl.classList.toggle('show')
}

