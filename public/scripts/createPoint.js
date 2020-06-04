
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

    citySelect.innerHTML = "<option>Selecione a cidade</option>";
    citySelect.disabled = true;
    fetch(url).then((res) => {
        return res.json().then( cities => { 
            for( let city of cities){
                citySelect.innerHTML +=  `<option value="${city.nome}">${city.nome}</option>`;
            }

            citySelect.disabled = false
 
        } );
    })


}


document.querySelector("select[name = uf]").addEventListener("change", getCities)



// Itens de Coleta 

// Pegar todos os li's
const itensToCollect = document.querySelectorAll(".itens-grid li");

for(let itens of itensToCollect){
    itens.addEventListener("click", handleSelectedItem)
}

const collectedItems = document.querySelector("input[name=items]")

let selectedItems = [];


function handleSelectedItem(event){
    let itemLi = event.target;
    // add or remove class with js
    
    itemLi.classList.toggle("selected");

    let itemId = itemLi.dataset.id;

    

    // Verificar se existe items selecionados, se sim
    // pegar os items selecionados

    let alredySelected = selectedItems.findIndex( item =>{
        let itemFound = item == itemId; //Isso será True or False
        return itemFound
    })
    // se ja estiver selecionado, tirar da seleção
    if(alredySelected >= 0){
        let filteredItems = selectedItems.filter(item =>{
            let itemsIsDifferent = item != itemId
            return itemsIsDifferent
        })
        selectedItems = filteredItems;
    }
    else{
        // se não estiver selecionado, adicionar na seleção
        selectedItems.push(itemId);
    }
    
    collectedItems.value = selectedItems
    // atualizar o campo escondido com os dados selecionados


}
