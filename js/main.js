const habilidadesPokemon = (dados) =>{
      // Habilidades do Pokémon:
      for (let i = 0; i <= 5; i++) {
            NomeHabilidades = dados.stats[i].stat.name;
            ValorHabilidades = dados.stats[i].base_stat;  
            
            let tr = document.createElement("tr");
            tr.id = NomeHabilidades;
            tr.innerHTML = NomeHabilidades + ": " + ValorHabilidades
            document.querySelector("#habilidadesPersonagens").appendChild(tr);
      }   
}

/* const verificarNomePokemon = (nomePokemon) => {
      //nome do pokemon na API:
      console.log("escrevi no campo: " + nomePokemon)
      console.log("está na API: " + data.name)

      if (nomePokemon != dados.name) {
            console.log('nome ta errado')
            document.querySelector("#erro").innerHTML = 'Nome incorreto'
      }  else{
            console.log("ok")
      }
};  */

const conectarAPI = async () => {
      // buscando o valor do HTML - pelo nome:
      let nomePokemon = document.querySelector("#nomePokemon").value.toLowerCase();
      let idPokemon = document.querySelector("#idPokemon").value;

      // se ambos campos estiverem vazios:
      if (nomePokemon == "" && idPokemon == "") {
           return document.querySelector("#erro").innerHTML = 'Preencha um dos campos';
      }

      // operador ternário:
      (nomePokemon == '') ? url = `https://pokeapi.co/api/v2/pokemon/${idPokemon}`
                  : //verificarNomePokemon(nomePokemon); 
                  url = `https://pokeapi.co/api/v2/pokemon/${nomePokemon}`

      // API:
      fetch(url).then((response) =>{return response.json();})
                .then((data) =>{ 
                              habilidadesPokemon(data);
                              const urlImagem = `https://pokeres.bastionbot.org/images/pokemon/${data.id}.png`;

                              // mostrar na página:
                              document.querySelector("#mostrarImagem").src = urlImagem;
                              document.querySelector("#divHabilidades").style.display = "flex";
                  })
                .catch((erro) =>{console.log("Erro: " + erro)});
};

document.querySelector("#mostrar").addEventListener("click", conectarAPI);

// Limpando o HTML:
document.querySelector("#limpar").addEventListener("click", () => {
      let apagar = document.querySelectorAll(".apagar");
      for (let i = 0; i < apagar.length; i++) {
            apagar[i].value = "";
      }
      document.querySelector("#erro").textContent = "";
      document.querySelector("#divHabilidades").style.display = 'none'
});