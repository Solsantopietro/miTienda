const cards = document.querySelectorAll('.card');
const checkboxFilter = document.querySelectorAll('.checkbox-product');
const filterSearch = document.querySelector('#filter-name');
const filterScore = document.querySelectorAll(".checkbox-score");

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

filterSearch.oninput = () => {
    for (let card of cards) {
        if (card.dataset.name.includes(filterSearch.value.toLowerCase())) {
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
        for (let checkbox of checkboxFilter) {
            if (checkbox.checked) {
                if (checkbox.value === card.dataset.type) {
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

const uncheckedScore = () => {
    for (let score of filterScore) {
        if (score.checked) {
            return false
        }
    }
    return true
}

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