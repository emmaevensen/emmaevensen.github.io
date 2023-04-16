
//Henter elementer fra DOM
let navnEl = document.querySelector('#navn')
let gruppeEl = document.querySelector('#gruppe')
let maanedEl = document.querySelector('input[type=month]')
let kontoNrEl = document.querySelector('#kontoNr')
let grunnlonnTreningEl = document.querySelector('#grunnlonnTrening')
let lonnKampEl = document.querySelector('#lonnKamp')
let treningstimerEl = document.querySelector('#treningstimer')
let kamperEl = document.querySelector('#kamper')
let submitBtn = document.querySelector('button[type=submit]')
let formEl = document.querySelector('form')


//Når man trykker på knappen vil funksjonen skrivUt kalles
submitBtn.addEventListener('click', skrivUt)

//Lønnsskjema objekt
lonnsskjema = {
    navn: "", 
    gruppe: "", 
    maaned: "", 
    kontoNr: 5 ,
    grunnlonnTrening: 6,
    lonnKamp: 4,
    treningstimer: 3,
    kamper: 2
}


/* for(let key in lonnskjema){
    console.log(lonnskjema[key])
    formEl.innerHTML += `<p><b>${key}:</b> ${lonnskjema[key]}</p>`
} */

//Funksjon som skriver ut lonnsskjema som et dokument 
function skrivUt(e){

    //avbryter skjemaets normale utsendig av data
    e.preventDefault()
    console.log("Skriver ut lønnsskjema")

    formEl.innerHTML = ""
    

    //Skriver ut overskrift info
    formEl.innerHTML += `<h1><b>INFO: </b></h1>`

    //Navn
    lonnsskjema.navn = navnEl.value
    formEl.innerHTML += `<p><b>Navn:</b> ${navnEl.value}</p>`

    //Gruppe
    lonnsskjema.gruppe = gruppeEl.value 
    formEl.innerHTML += `<p><b>Gruppe/lag:</b> ${gruppeEl.value}</p>`

    //Måned
    lonnsskjema.maaned = maanedEl.value 
    formEl.innerHTML += `<p><b>Måned:</b> ${maanedEl.value}</p>`

    //Kontonr. 
    lonnsskjema.kontoNr = kontoNrEl.value
    formEl.innerHTML += `<p><b>Konto nr:</b> ${kontoNrEl.value}</p>`

    //Grunnlønn per treningstime 
    lonnsskjema.grunnlonnTrening = grunnlonnTreningEl.value
    formEl.innerHTML += `<p><b>Grunnlønn per treningstime:</b> ${grunnlonnTreningEl.value} kr </p>`

    //Lønn per kamp
    lonnsskjema.lonnKamp = lonnKampEl.value
    formEl.innerHTML+= `<p><b>Lønn per kamp:</b> ${lonnKampEl.value} kr</p>`

    //Antall treningstimer
    lonnsskjema.treningstimer = treningstimerEl.value
    formEl.innerHTML += `<p><b>Antall treningstimer:</b> ${treningstimerEl.value}</p>`

    //Antall kamper 
    lonnsskjema.kamper = kamperEl.value
    formEl.innerHTML += `<p><b>Kamper:</b> ${kamperEl.value}</p>`

    //Skriver ut overskrift utbetaling
    formEl.innerHTML += `<h1>UTBETALING:</h1>`
    
    //Regner ut lønn for treninger og skriver ut
    let utbetaltTrening = treningstimerEl.value * grunnlonnTreningEl.value
    formEl.innerHTML += `<p><b>Utbetalt lønn for treninger: </b> ${utbetaltTrening} kr </p>`

    //Regner ut lønn for kamper og skriver ut 
    let utbetaltKamp = kamperEl.value * lonnKampEl.value
    formEl.innerHTML += `<p><b>Utbetalt lønn for kamper: </b> ${utbetaltKamp} kr`

    //Regner ut totalt utbetalt lønn
    formEl.innerHTML += `<p><b>Totalt utbetalt lønn: </b> ${utbetaltTrening + utbetaltKamp} kr </p>`

    //skriver ut husk melding 
    formEl.innerHTML += `<h2 id="husk">HUSK!</h2>`
    formEl.innerHTML += `<p id="melding">Lønnskjema sendes inn senest den 8. i påfølgende måned til lonn@ohil.no. <br> Utbetaling skjer den 15. i hver måned</p>`


 }




