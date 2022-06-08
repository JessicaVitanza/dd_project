const BASE_URL = 'https://www.dnd5eapi.co/api/races';

let array = [];

function goToPage(id) {
    let urlString = '/race.html'
   console.log(id)
    if (id) {
        urlString = urlString + '?id=' + id
    }
           window.location.href = urlString
}

function itpage(obj) {
    array = Object.values(obj)[1];
    display(array)
}

function display(array) {
    const title = document.createElement('h1')
    const nodetitle = document.createTextNode('Scegli una razza')
    title.classList.add('title-races')  
    
   const container = document.getElementById('container-information') 
   container.appendChild(title)

   for (const page of array) {
   
       console.log(page)
       const div = document.createElement('div')
       div.classList.add('card')
       const img = document.createElement('img')
       img.src = './assets/' + page.index + ".png"
       div.appendChild(img)
       const span = document.createElement('span')
       const node = document.createTextNode(page.name)
       span.onclick = () => goToPage(page.index)
       span.appendChild(node)
       div.appendChild(span)
       title.appendChild(nodetitle)
       
       container.appendChild(div)
   }
   
}


function api() {
    fetch(BASE_URL)
    .then(response => response.json())
    .then(resalt => itpage(resalt))
}




api()