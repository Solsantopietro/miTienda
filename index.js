const cards = document.querySelectorAll('.card');
const productFilters = document.querySelectorAll('.checkbox-product');
const textInputFilter = document.querySelector('#filter-name');
const scoreFilters = document.querySelectorAll(".checkbox-score");
const buttonClean = document.querySelector(".clean-option")

// CARDS

const showCard = (card) => {
    card.classList.remove("hidden")
}

const hideCard = (card) =>{
    card.classList.add("hidden")
}

const showAllCards = () =>{
    for (let card of cards) {
        showCard(card)
    }
}

const filterCards = () =>{
    if (thereIsAFilter()) {
        for(let card of cards) {
            applyFilter(card)
        }
    }else{
        showAllCards()
    }
}

// SCORE

const thereIsScoreFilter = () =>{
    for (let scoreFilter of scoreFilters){
        if (scoreFilter.checked) return true
    }
    return false
}

const pasaFiltroScore = (score) =>{
    if (thereIsScoreFilter()){
        for (let scoreFilter of scoreFilters){
            if (scoreFilter.checked && scoreFilter.value === score){
                return true
            }
        }
        return false
    }else{
        return true
    }
}

// PRODUCT FILTER

const thereIsAProductFilter = () =>{
    for (let productFilter of productFilters){
        if (productFilter.checked){
            return true
        }
    }
    return false
}

const pasaFiltroDeProductos = (productType) => {
    if (thereIsAProductFilter()){
        for (let productFilter of productFilters){
            if (productFilter.checked && productFilter.value === productType){
                return true
            }
        }
        return false
    }else{
        return true 
    }
}

// TEXT FILTER

const thereIsTextFilter = () =>{
    return (textInputFilter.value !== "")
}

const pasaFiltroDeTexto = (productName)=> {
    if (thereIsTextFilter()){
        if (productName.includes(textInputFilter.value.toLowerCase())){
            return true
        }
        return false
    }else{
        return true
    }
}

// GENERAL

const applyFilter = (card) => {
    if (pasaFiltroScore(card.dataset.score) && pasaFiltroDeProductos(card.dataset.type) && pasaFiltroDeTexto(card.dataset.name)){
        showCard(card)
    }else{
        hideCard(card)
    }
}

const thereIsAFilter = () => {
    return thereIsScoreFilter && thereIsAProductFilter && thereIsTextFilter
}

const initialize = () =>{
    showAllCards()
    console.log("initializing score filters")
    for (let scoreFilter of scoreFilters){
        scoreFilter.oninput = () => {
            filterCards()
        }
    }
    for (let productFilter of productFilters){
        productFilter.oninput = () =>{
            filterCards()
        }
    }
    textInputFilter.oninput = () =>{
            filterCards()
    }
}

initialize()