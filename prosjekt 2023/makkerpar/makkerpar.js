//Henter ellement fra DOM 
let textarea = document.getElementById('textarea')

//Lager array som navnet på spillerne senere skal puttes inn i 
let spillere = []

//gir fokus til textarea
textarea.focus()


//Funksjon som fjerner en spesifikk fra arrayet 
function removeItemOnce(arr, value) {
    var index = arr.indexOf(value);
    if (index > -1) {
        arr.splice(index, 1);
    }
    return arr;
}

function lagMakkerparArray(input){
    //Splitter opp inputene når det kommer et komma, og fikser slik at det ikke blir med mellomrom om det skrives mellomrom 
    let tags = input.split(',').filter(tag => tag.trim()!== '').map(tag => tag.trim())
    
    //lager array til spillere, trenger jeg egentlig denne??
    spillere = [];

    //Putter navnene som er splittet opp inn i arrayet spillere
    tags.forEach(tag => {
        spillere.push(tag)
    })
    //returnerer spillere
    return spillere

}

// Funksjon som lagrer makkerpar i localStorage
function lagreMakkerparILocalStorage(grupper) {
    // konverterer makkerpar arrayet til en streng (f.eks. JSON-format)
    let makkerparString = JSON.stringify(grupper);
    
    // lagrer makkerpar strengen i localStorage under en nøkkel (f.eks. 'makkerpar')
    localStorage.setItem('makkerpar', makkerparString);
    
    console.log('Makkerparene er lagret i localStorage.');
}

// Funksjon som henter makkerpar fra localStorage
function visMakkerparFraLocalStorage() {
    // henter makkerpar strengen fra localStorage under nøkkelen 'makkerpar'
    let makkerparString = localStorage.getItem('makkerpar');
    
    // konverterer makkerpar strengen tilbake til et array (f.eks. fra JSON-format)
    let lagredeMakkerpar = JSON.parse(makkerparString);
    
    // gjør noe med det lagrede makkerparene (f.eks. vis dem på siden)
    // ...
    
    console.log('Makkerparene er hentet fra localStorage.');
}






//funksjon som lager makkerpar 
function lagMakkerpar() {
    let antallSpillere = spillere.length
    let totallSpillere = spillere.length
    let pareneEl = document.querySelector("#parene")
    pareneEl.innerHTML = ''
    let grupper = [];
    let gruppe = [];
    let i = 0;

    


    //Trekker elever og legger i gruppe
    while (antallSpillere > 0){
        
        //trekker en random spiller fra spillere arrayet 
        let spiller = spillere[Math.floor(Math.random() * spillere.length)]
        
        //legger den uttrekte spilleren i gruppe arrayet 
        gruppe.push(spiller)

        //Fjerner den trekte eleven fra arrayet
        removeItemOnce(spillere, spiller);
        antallSpillere--
        i++;

        // Legger gruppen inn i grupper-arrayet hvis det er to spillere i gruppen 
        if (gruppe.length == 2){
            grupper.push(gruppe);
            gruppe = [];
        }

        

        //Om det er oddetall, legges spillere som er til overs inn i de første gruppene
        if (spillere.length == 0 && gruppe.length != 0){
            for (let i = 0; i < gruppe.length; i++){
                try {
                    grupper[i].push(gruppe[i])
                } 
                //Om det skjer en error/feil vil det sendes enn feilmelding 
                catch(err){
                    console.log(err.message)
                    containerEl.innerHTML = `
                        <p><b>Dette går ikke opp.</b> <br>
                        Det er ${antallSpillere} elever, og maks 2 spillere per gruppe.
                        </p>
                    `
                    return
                }

            }
        }

        antallSpillere = spillere.length

        
        
    }

    let gruppenr = 1;
    let counter = 0;
    
    let maksGrupper = totallSpillere / 2

    // console.log(maksGrupper)

    //console.log(grupper)

    //Skriver til HTML
    for (let i = 0; i < maksGrupper; i++){
        // Lager div for hver gruppe
        let divEl = document.createElement('div');
        divEl.classList.add('gruppe');

        //lager en overskrift med gruppenr 
        let h3El = document.createElement('h3')
        h3El.innerText = `Par ${gruppenr}`;

        divEl.appendChild(h3El);
        pareneEl.appendChild(divEl);
        gruppenr++;

        for (let j = 0; j<grupper[i].length; j++){
            /* elev = grupper[i][j] */
            spiller = grupper[i][j]

            counter++;

            //Hver spiller er et avsnitt i div-en
            let pEl = document.createElement('p');
            /* pEl.innerText = `- ${elev}`; */
            pEl.innerText = `- ${spiller}`;
            divEl.appendChild(pEl);
        }
    }

    return grupper
}



//Funksjon som lager makkerparene
function lag(){
    spillere = lagMakkerparArray(textarea.value)
    let tall1El = document.querySelector("#tall1")

    lagMakkerpar()

    // lagrer makkerparene i localStorage
  lagreMakkerparILocalStorage(grupper);
}



