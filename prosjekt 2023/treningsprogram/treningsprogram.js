//Henter elementer fra DOM
let oppvarmingEls = document.querySelectorAll('.oppvarming')
let hoveddelEls = document.querySelectorAll('.hoveddel')
let styrkeEls = document.querySelectorAll('.styrke')
let formEl = document.querySelector('form')

let submitBtn = document.querySelector('button[type=submit]')

submitBtn.addEventListener('click', lagTreningsprogram)


program = {
    oppvarming : [], 
    hoveddel : [], 
    styrke : []
}

function lagTreningsprogram(e){
    //avbryter skjemaets normale utsendig av data
    e.preventDefault()
    console.log("Lager treningsprogram")

    formEl.innerHTML = ""

    //Skriver ut overskrift
    formEl.innerHTML += `<h2><b>Oppvarming</b></h2>`

    //går gjennom oppvarming
    for(let i=0; i<oppvarmingEls.length; i++){
        //sjekker hvilke øvelser som er markert
        if(oppvarmingEls[i].checked){
            //Legger inn i programsobjektet
            program.oppvarming.push(oppvarmingEls[i].value)
            formEl.innerHTML+= `<p> - ${oppvarmingEls[i].value}</p>`
        }
    }

    //Skriver ut overskrift
    formEl.innerHTML += `<h2><b>Hoveddel</b></h2>`

    //går gjennom hoveddel 
    for(let i=0; i<hoveddelEls.length; i++){
        //sjekker hvilke øvelser som er markert
        if(hoveddelEls[i].checked){
            //Legger inn i programsobjektet
            program.hoveddel.push(hoveddelEls[i].value)
            formEl.innerHTML += `<p> - ${hoveddelEls[i].value}</p>`
        }
    }

    //Skriver ut overskrift
    formEl.innerHTML += `<h2><b>Styrke</b></h2>`

    //går gjennom hoveddel
    for(let i=0; i<styrkeEls.length; i++){
        //sjekker hvilke øvelser som er markert
        if(styrkeEls[i].checked){
            //Legger inn i programsobjektet
            program.styrke.push(styrkeEls[i].value)
            formEl.innerHTML += `<p> - ${styrkeEls[i].value} </p>`
        }
    }

    console.log(program)


}

