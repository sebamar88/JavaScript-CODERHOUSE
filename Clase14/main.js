const row = document.querySelector('.row')
const nextPage = document.querySelector('#next')
const prevPage = document.querySelector('#prev')
const currentPage = document.querySelector('#currentPage')

async function fetchApi(page) {
  const url = `https://rickandmortyapi.com/api/character?page=${String(page)}`
  const result = await $.ajax({    
      url: url,
      type: 'GET'
  });

  return await result;
}

let page = 1;
currentPage.textContent = `Current page: ${page}`

const drawData = (page)=>{
  fetchApi(page).then(response => {
    row.innerHTML = '';
    response.results.map(({image, name, species, status}) => {
      row.innerHTML += `
      <div class="col">
      <img class="img-fluid" src="${image}" />
      <h4>${name}</h4>
      <span>Especie: ${species}</span>
      <span>Estado: ${status}</span>
      </div>
      `
    })
  })
}

drawData()

nextPage.addEventListener('click', (e)=>{
  e.preventDefault()
  if(page < 34){
    page++
  }
  currentPage.textContent = `Current page: ${page}`
  row.innerHTML= `<img src="./Spinner-1s-200px.svg" /> `
  drawData(page)
})

prevPage.addEventListener('click', (e)=>{
  e.preventDefault()
  if(page > 1){
    page--
  }
  currentPage.textContent = `Current page: ${page}`
  row.innerHTML= `<img src="./Spinner-1s-200px.svg" /> `
  drawData(page)
})