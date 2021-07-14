const habilidadesPokemon = (infoNecessaria) =>{

      // Habilidades do Pokémon:
      for (let i = 0; i <= 5; i++) {
            NomeHabilidades = infoNecessaria.stats[i].stat.name;
            ValorHabilidades = infoNecessaria.stats[i].base_stat;  
            
            let tr = document.createElement("tr");
            tr.id = NomeHabilidades;
            tr.innerHTML = NomeHabilidades + ": " + ValorHabilidades
            document.querySelector("#habilidadesPersonagens").appendChild(tr);
      }    
}

/*  const verificarNomePokemon = async (nomePokemonAPI) => {
      //nome do pokemon na API:
      console.log(nomePokemonAPI)

      if (nomePokemon != nomePokemonAPI) {
            console.log('nome ta errado')
            document.querySelector("#erro").innerHTML = 'Nome incorreto'
      } 
}; */

const conectarAPI = async () => {

      // buscando o valor do HTML - pelo nome:
      let nomePokemon = document.querySelector("#nomePokemon").value.toLowerCase();
      let idPokemon = document.querySelector("#idPokemon").value;

      // se ambos campos estiverem vazios:
      if (nomePokemon == "" && idPokemon == "") {
           return document.querySelector("#erro").innerHTML = 'Preencha um dos campos';
      }

      // buscar pokemon pelo id:
      if (nomePokemon == "") {
            var url = `https://pokeapi.co/api/v2/pokemon/${idPokemon}`;
      }
      //buscar pokemon pelo nome:
      if (idPokemon == '') {
            var url = `https://pokeapi.co/api/v2/pokemon/${nomePokemon}`;
            // verificarNomePokemon(nomePokemonAPI);
      }

      var dados = await fetch(url);
      var infoNecessaria = await dados.json();
      var idAPI = infoNecessaria.id;

      console.log(infoNecessaria);  

      habilidadesPokemon(infoNecessaria);

       
      // API que mostra a imagem:
      const urlImagem = `https://pokeres.bastionbot.org/images/pokemon/${idAPI}.png`;

      // mostrar a imagem na página:
      document.querySelector("#mostrarImagem").src = urlImagem;

      // mostrar as habilidades na página:
      document.querySelector("#divHabilidades").style.display = "flex";
};

document.querySelector("#mostrar").addEventListener("click", conectarAPI);


// Limpando o HTML:
const limparPesquisa = () =>{
      document.querySelector("#nomePokemon").value = ''
      document.querySelector("#idPokemon").value = ''
      document.querySelector("#divHabilidades").style.display = 'none'
}
document.querySelector("#limpar").addEventListener("click", limparPesquisa);