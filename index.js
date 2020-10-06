const cards = document.querySelectorAll('.card');
const checkboxFilter = document.querySelectorAll('checkbox-product');
const filterSearch = document.querySelector('#filter-name');


filterSearch.oninput = () =>{
    for (let card of cards){
        if (card.dataset.name.includes(filterSearch.value.toLowerCase())){
        card.classList.remove('hidden')
        }else {
        card.classList.add('hidden')

    }
    }
};