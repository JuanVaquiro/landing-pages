const options = { method: 'GET' }
const API = 'https://rickandmortyapi.com/api/character'
const content = document.getElementById('content')

async function getData(urlApi) {
  const resp = await fetch(urlApi, options)
  const { results } = await resp.json()
  return results
}

(async () => {
  try { 
    const episode = await getData(API)
    let view = `
    ${episode.map(item => `
      <div class="group relative">
      <div
        class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
        <img src="${item.image}" alt="${item.name}" class="w-full">
      </div>
        <div class="mt-4 flex justify-between">
          <h3 class="text-sm text-gray-700">
            <span aria-hidden="true" class="absolute inset-0 p-2"></span>
           ${item.name}</br>
           ${item.species} - ${item.status}
          </h3>
        </div>
      </div>
    `).slice(0,5).join('')}`
    content.innerHTML = view
  } catch (error) {
    throw new Error('API Not Found')
  }
})(); // 👈 invocar una fn anonima

const episode = getData(API)
console.log('epo', episode)
