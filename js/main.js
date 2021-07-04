const conectarAPI = async () => {
      // buscando o valor do HTML:
      let idPokemon = document.querySelector("#idPokemon");
      let opcaoValor = idPokemon.options[idPokemon.selectedIndex].value;

      // Validar se o campo select estiver vazio
      if (opcaoValor == 0){
           document.querySelector("#erro").innerHTML = 'Selecione um Pokemon';  
      } else{
            document.querySelector("#erro").innerHTML = '';
      }

      // API que mostra a imagem:
      const urlImagem = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${opcaoValor}.png`;


      // mostrar na página:
      document.querySelector("#mostrarImagem").src = urlImagem; 
}

document.querySelector('#mostrar').addEventListener('click', conectarAPI)