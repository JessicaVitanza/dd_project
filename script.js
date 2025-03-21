const BASE_URL = 'https://www.dnd5eapi.co/api/races';

let array = [];


function initPage(element) {
    const temp = Object.values(element)[1]
    array = temp.map(obj => Element.fromDbObj(obj));
    console.log(array)
    displayInfo(array)
}

function createCard(element) {

    const cardTemplate = `
    
    <span class="name-card">#NAME</span>
    <button class="information-btn" onclick="showOrHide()">show more
        <img style="height:16px;" src="./assets/expand_more_FILL0_wght400_GRAD0_opsz48.svg" alt="">
    </button>
    <div class="desc-container" style="display: none;">
        <div class="desc-card">
            <span class="desc-info">#DESCRIPTION</span>
            <ul class="subrace-list">
                <li>#SUBRACE</li>
            </ul>
        </div>

    </div>
        `


    const raceHtml = cardTemplate.replace('#NAME', element.name)

    return raceHtml;
}

function displayInfo(array) {
    const container = document.getElementById('container-information')
    for (const element of array) {
        const card = document.createElement('div');
        card.classList.add('info-card')
        card.innerHTML = createCard(element)

        const descCard = card.querySelector('.desc-card')
        descCard.innerHTML = loadInfo(element.url)

        const descButton = card.querySelector('.information-btn');
        const divInfo = card.querySelector('.desc-container')
        descButton.onclick = () => showOrHidePageInformation(divInfo);

        container.appendChild(card)
    }
}


function loadPg() {
    fetch(BASE_URL)
        .then(response => response.json())
        .then(result => initPage(result))
}

function loadInfo (id){
    fetch('https://www.dnd5eapi.co' + id)
    .then(response => response.json())
    .then(result => /*initInfo*/console.log(result))
}

function initInfo (element){
    const temp = Object.values(element)
    array = temp.map(obj => Race.fromDbObj(obj));
    // console.log(array)
}

loadPg()

