const verificarNomePokemon = async (infoNecessaria) => {
      //nome do pokemon na API:
      var nomeNaAPI = infoNecessaria.name;
      console.log("o nome do pokemon é: " + nomeNaAPI);


/*       console.log(infoNecessaria.name)
      if (nomePokemon != infoNecessaria.name) {
            console.log('nome ta errado')
            document.querySelector("#erro").innerHTML = 'Nome incorreto'
      } */
};

const conectarAPI = async () => {
      // buscando o valor do HTML - pelo nome:
      let nomePokemon = document.querySelector("#nomePokemon").value.toLowerCase();
      let idPokemon = document.querySelector("#idPokemon").value;

      if (nomePokemon == "" && idPokemon == "") {
            document.querySelector("#erro").innerHTML = 'Preencha um dos campos';
      }

      if (nomePokemon == "") {
            var url = `https://pokeapi.co/api/v2/pokemon/${idPokemon}`;
      }
      if (idPokemon == '') {
            var url = `https://pokeapi.co/api/v2/pokemon/${nomePokemon}`;
            verificarNomePokemon(infoNecessaria);
      }
      var dados = await fetch(url);
      var infoNecessaria = await dados.json();



      // Habilidades do Pokémon:
      var habilidades = infoNecessaria.stats;

      let hp = habilidades[0].base_stat;
      let attack = habilidades[1].base_stat;
      let defense = habilidades[2].base_stat;
      let specialAttack = habilidades[3].base_stat;
      let specialDefense = habilidades[4].base_stat;
      let speed = habilidades[5].base_stat; 

      document.querySelector("#hp").innerHTML = hp;
      document.querySelector("#attack").innerHTML = attack;
      document.querySelector("#defense").innerHTML = defense;
      document.querySelector("#specialAttack").innerHTML = specialAttack;
      document.querySelector("#specialDefense").innerHTML = specialDefense;
      document.querySelector("#speed").innerHTML = speed;

/*    for (let i = 0; i < habilidades.length; i++) {

            //var valor = Number(habilidades.base_stat);
            //console.log(valor)

            let hp = habilidades[0].base_stat;
            let attack = habilidades[1].base_stat;
            let defense = habilidades[2].base_stat;
            let specialAttack = habilidades[3].base_stat;
            let specialDefense = habilidades[4].base_stat;
            let speed = habilidades[5].base_stat; 

            console.log(hp)
            console.log(habilidades[i])
      } */
      

// API que mostra a imagem:
const urlImagem = `https://pokeres.bastionbot.org/images/pokemon/${idPokemon}.png`;

// mostrar na página:
document.querySelector("#mostrarImagem").src = urlImagem;
};

document.querySelector("#mostrar").addEventListener("click", conectarAPI);