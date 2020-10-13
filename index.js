const cards = document.querySelectorAll('.card');
const checkboxFilter = document.querySelectorAll('.checkbox-product');
const filterSearch = document.querySelector('#filter-name');
const filterScore = document.querySelectorAll(".checkbox-score");

// PUNTUACION DE ESTRELLITAS

const scoreCheckbox = () => {
    for (let score of filterScore) {
        score.oninput = () => {
            if (uncheckedScore()) {
                showAllCards()
            }
            else {
                checkboxScore()
            }
        }
    }
}

scoreCheckbox()

//BUSQUEDA POR TEXTO 

const textSearch = () => {
    filterSearch.oninput = () => {
        for (let card of cards) {
            if (card.dataset.name.includes(filterSearch.value.toLowerCase())) {
                card.classList.remove('hidden')
            } else {
                card.classList.add('hidden')
            }
        }
    };
}

textSearch()

//INICIALIZO REMOVIENDO EL HIDDEN 

const initialize = () => {
    for (let card of cards) {
        card.classList.remove('hidden');
    }

}

initialize()

// RECORRO LOS CHECKBOX

const loopCheckbox = () => {
    for (let checkbox of checkboxFilter) {
        checkbox.oninput = () => {
            if (uncheckedCategories()) {
                showAllCards()
            }
            else {
                filterCheckbox()
            }
        }

    }
}

loopCheckbox()

// RECORRO LAS TARJETAS Y CHECKBOX

const filterCheckbox = () => {
    for (let card of cards) {
        card.classList.add('hidden');
        for (let checkbox of checkboxFilter) {
            if (checkbox.checked) {
                if (checkbox.value === card.dataset.type) {
                    card.classList.remove('hidden');
                }
            }
        }
    }
}




// MUESTRO TODAS LAS TARJETAS

const showAllCards = () => {
    for (let card of cards) {
        card.classList.remove("hidden")
    }
}


// ME FIJO SI HAY ALGO DESCHEQUEADO

const uncheckedCategories = () => {
    for (let checkbox of checkboxFilter) {
        if (checkbox.checked) {
            return false
        }
    }
    return true
}

// ME FIJO SI HAY ALGUNA ESTRELLA DESCHEQUEADA

const uncheckedScore = () => {
    for (let score of filterScore) {
        if (score.checked) {
            return false
        }
    }
    return true
}

// RECORRO LAS TARJETAS Y CHECKBOX DE ESTRELLAS

const checkboxScore = () => {
    for (let card of cards) {
        card.classList.add('hidden');
        for (let score of filterScore) {
            if (score.checked) {
                if (score.value === card.dataset.score) {
                    card.classList.remove('hidden');
                }
            }
        }
    }
}


// FUNCION ENTERA


// const pasaTodosLosFiltros = (card) => {
//     if (textSearch(card) && loopCheckbox(card) && scoreCheckbox(card)) {
//         return true
//     }
// }