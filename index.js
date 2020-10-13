const cards = document.querySelectorAll('.card');
const checkboxFilter = document.querySelectorAll('.checkbox-product');
const filterSearch = document.querySelector('#filter-name');

filterSearch.oninput = () =>{
    for (let card of cards){
        if (card.dataset.name.includes(filterSearch.value.toLowerCase())){
        card.classList.remove('hidden')
        } else {
        card.classList.add('hidden')

    }
    }
};


const initialize = () => {
    for (let card of cards) {
        card.classList.remove('hidden');
    }

}

initialize()


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

const filterCheckbox = () => {
    for (let card of cards) {
        card.classList.add('hidden');
        for (let filtro2 of checkboxFilter) {
            if (filtro2.checked) {
                if (filtro2.value === card.dataset.type) {
                    card.classList.remove('hidden');
                }
            }
        }
    }
}

const showAllCards = () => {
    for (let card of cards) {
        card.classList.remove("hidden")
    }
}

const uncheckedCategories = () => {
    for (let checkbox of checkboxFilter) {
        if (checkbox.checked) {
            return false
        }
    }
    return true
}
