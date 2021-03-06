const cards = document.querySelectorAll('.card');
const productFilters = document.querySelectorAll('.checkbox-product');
const textInputFilter = document.querySelector('#filter-name');
const scoreFilters = document.querySelectorAll(".checkbox-score");
const buttonClean = document.querySelector(".clean-option");
const viewGrid = document.querySelector(".iconGrid")
const productText = document.querySelectorAll(".product-text")
const buttonFilters = document.querySelector(".iconFilter")
const filter = document.querySelector(".sector-filtro")
const buttonClose = document.querySelector(".close-filters")


//BOTON DE FILTRO

const filterPress = () => {
    buttonFilters.onclick = () => {
        filter.classList.add("filters-open")
    }
}

filterPress()

//BOTON CERRAR FILTROS

const filterClose = () => {
    buttonClose.onclick = () =>{
        filter.classList.remove("filters-open")

    }
}

filterClose()
 
// VER COMO LISTA

function buttonList () {
    for (let card of cards) {
        card.classList.add("cardList")
        card.classList.remove("card")
        let productDetail = card.querySelector(".product-text")
        let productStyle = card.querySelector(".product")
        productDetail.classList.remove("hidden")
        productStyle.classList.add("productList")
    }
}
function buttonGrid () {
    for (let card of cards) {
        card.classList.add("card")
        card.classList.remove("cardList")
        let productDetail = card.querySelector(".product-text")
        let productStyle = card.querySelector(".productList")
        productDetail.classList.add("hidden")
        productStyle.classList.remove("productList")

    }
}

//BUTTON CLEAN

const cleaner = () => {
    buttonClean.onclick = () => {
        for (let productFilter of productFilters) {
            productFilter.checked = false
        }
        for (let scoreFilter of scoreFilters){
            scoreFilter.checked = false
        }
        textInputFilter.value = ""
        showAllCards()
    }
}


cleaner()


// CARDS

const showCard = (card) => {
    card.classList.remove("hidden")
}

const hideCard = (card) => {
    card.classList.add("hidden")
}

const showAllCards = () => {
    for (let card of cards) {
        showCard(card)
    }
}

const filterCards = () => {
    if (thereIsAFilter()) {
        for (let card of cards) {
            applyFilter(card)
        }
    } else {
        showAllCards()
    }
}

// SCORE

const thereIsScoreFilter = () => {
    for (let scoreFilter of scoreFilters) {
        if (scoreFilter.checked) return true
    }
    return false
}

const pasaFiltroScore = (score) => {
    if (thereIsScoreFilter()) {
        for (let scoreFilter of scoreFilters) {
            if (scoreFilter.checked && scoreFilter.value === score) {
                return true
            }
        }
        return false
    } else {
        return true
    }
}

// PRODUCT FILTER

const thereIsAProductFilter = () => {
    for (let productFilter of productFilters) {
        if (productFilter.checked) {
            return true
        }
    }
    return false
}

const pasaFiltroDeProductos = (productType) => {
    if (thereIsAProductFilter()) {
        for (let productFilter of productFilters) {
            if (productFilter.checked && productFilter.value === productType) {
                return true
            }
        }
        return false
    } else {
        return true
    }
}

// TEXT FILTER

const thereIsTextFilter = () => {
    return (textInputFilter.value !== "")
}

const pasaFiltroDeTexto = (productName) => {
    if (thereIsTextFilter()) {
        if (productName.includes(textInputFilter.value.toLowerCase())) {
            return true
        }
        return false
    } else {
        return true
    }
}

// GENERAL

const applyFilter = (card) => {
    if (pasaFiltroScore(card.dataset.score) && pasaFiltroDeProductos(card.dataset.type) && pasaFiltroDeTexto(card.dataset.name)) {
        showCard(card)
    } else {
        hideCard(card)
    }
}

const thereIsAFilter = () => {
    return thereIsScoreFilter && thereIsAProductFilter && thereIsTextFilter
}

const initialize = () => {
    showAllCards()
    console.log("initializing score filters")
    for (let scoreFilter of scoreFilters) {
        scoreFilter.oninput = () => {
            filterCards()
        }
    }
    for (let productFilter of productFilters) {
        productFilter.oninput = () => {
            filterCards()
        }
    }
    textInputFilter.oninput = () => {
        filterCards()
    }
}

initialize()