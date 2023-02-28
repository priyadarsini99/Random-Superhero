
const SUPERHERO_TOKEN= '117214397919026'
const BASE_URL =
`https://superheroapi.com/api.php/${SUPERHERO_TOKEN}`
const searchButton =document.getElementById('searchButton')
const randomhero =document.getElementById('randomhero')
const searchinput= document.getElementById('searchinput')
const heroimageDiv=document.getElementById('heroimage')

const getStatsHTML = (charecter)=>
{
const stats = Object.keys(charecter.powerstats).map(stat=>{
    return `<p id="sstats">${stat}: ${charecter.powerstats[stat]}</p>`
  })
console.log(stats.join(''))
return stats.join('')
}

const getsearchSuperHero=(name)=>
{

  fetch(`${BASE_URL}/search/${name}`)
  .then(response=>response.json())
  .then(json=>{
      const hero = json.results[0]
    const tem = getStatsHTML(hero)
    const name = `<h2 id="h_name">${json.results[0].name}</h2>`
  heroimageDiv.innerHTML=`<div id="super">${name} <img id="pic" src="${json.results[0].image.url}"  height=200 width=200/><div id="s">${tem}</div></div><hr>`



  }
)
}
const getSuperHero=(id)=>
{
  fetch(`${BASE_URL}/${id}`)
  .then(response=>response.json())
  .then(json=>
    {  const hero = json
       const tem = getStatsHTML(hero)
      console.log(json.name)
      const name = `<h2 id="h_name">${json.name}</h2>`
heroimageDiv.innerHTML= `<div id="super">${name} <img id="pic" src="${json.image.url}"  height=200 width=200/><div id="s">${tem}</div></div><hr>`
}
)
}
const ranhero=()=>
{
  const number_e =731
  console.log(Math.floor(Math.random() * number_e) + 1)
  return Math.floor(Math.random() * number_e) + 1
}

randomhero.onclick=()=>getSuperHero(ranhero())
//document.querySelector('body').innerHTML+= `<img src="${img}" height=200 width=200/>`
searchButton.onclick=()=>{getsearchSuperHero(searchinput.value)}
