
function populateUFs(){
    let ufSelect =  document.querySelector("select[name = uf]");
    fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados').then((res) => {
        return res.json().then( states => { 

            for( let state of states){
                ufSelect.innerHTML +=  `<option value="${state.id}">${state.nome}</option>`;
            }

        } );
    })
}

populateUFs();

function getCities(event){
    let citySelect =  document.querySelector("[name = city]");
    let stateInput =  document.querySelector("[name = state]");

    let ufValue = event.target.value;
    let indexOfSelectedState = event.target.selectedIndex;
    stateInput.value = event.target.options[indexOfSelectedState];
    
    let url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`;

    fetch(url).then((res) => {
        return res.json().then( cities => { 

            for( let city of cities){
                citySelect.innerHTML +=  `<option value="${city.id}">${city.nome}</option>`;
            }

            citySelect.disabled = false
 
        } );
    })


}


document.querySelector("select[name = uf]").addEventListener("change", getCities)

