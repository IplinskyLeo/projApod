// let pkmFoto = document.getElementById('pokeImg');
// let pkmInfo = document.getElementById('info');
// pkmInfo.value = "oi";

// const fetchPokemon = () => {

//     const url = 'https://pokeapi.co/api/v2/pokemon/6';
//     fetch(url)
//         .then(response => response.json())
//         .then(pokemon => {

//             console.log(pokemon);
//             pkmFoto.src = pokemon.sprites.front_default;
//             pkmInfo.value = `
//             Nome: ${pokemon.name}
//             Peso: ${pokemon.weight}
//             Altura: ${pokemon.height}`;
//         })
// }
// fetchPokemon();

// key: bTFmIMaNA6OHLF659ccHROFKFCwNFCsSbq0dp5aP
// https://api.nasa.gov/planetary/apod?api_key=bTFmIMaNA6OHLF659ccHROFKFCwNFCsSbq0dp5aP&date=${date.value}
// https://api.nasa.gov/planetary/apod?api_key=bTFmIMaNA6OHLF659ccHROFKFCwNFCsSbq0dp5aP&date=2022-06-09

let imagem = document.querySelector('.apod');
let info = document.querySelector('.info');
let data = document.querySelector('.data');
let botao = document.querySelector('.botao');
let titulo = document.querySelector('.titulo');
let semiTitulo = document.querySelector('.semiTitulo');
let traduzido = '';
let trans = document.querySelector('.trans');


botao.addEventListener("click", function(e) {
  e.preventDefault();
  console.log(data.value);

  fetch('https://api.nasa.gov/planetary/apod?api_key=bTFmIMaNA6OHLF659ccHROFKFCwNFCsSbq0dp5aP&date='+data.value)
    .then(response => response.json())
    .then( (response) =>{
      // console.log(response.explanation)
      // console.log(response.hdurl)

      let infoo = info.innerHTML = response.explanation;
      imagem.src = response.hdurl
      titulo.innerHTML = response.title;
      
          const options = {
            method: 'GET',
            headers: {
              'X-RapidAPI-Key': '4a83184070mshd6ea170b7a5178ep10a484jsn198ca2f5138c',
              'X-RapidAPI-Host': 'google-translate20.p.rapidapi.com'
            }
          };

          fetch(`https://google-translate20.p.rapidapi.com/translate?text=${infoo}&tl=pt&sl=en`, options)
            .then(response => response.json())
            .then(response => {
              // console.log(response.data.translation)
              traduzido = response.data.translation
              trans.innerText = traduzido
            
          })
                
  })
});
