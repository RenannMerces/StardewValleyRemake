
const bodyimg = document.getElementById('bodyimg');
const botao1 = document.getElementById('botao1');

// Função para mudar a imagem de fundo
// Seleciona todos os botões com a classe 'botao'
const botoes = document.querySelectorAll('.botao');

function mudarImagemDeFundo() {
    bodyimg.style.backgroundImage = "url('src/1547811.jpg')";
  
    // Seleciona todos os botões com a classe 'meuBotao'
  
    // Percorre todos os botões e os oculta
    for (let i = 0; i < botoes.length; i++) {
      botoes[i].style.display = 'none';
    }
  }
// Adiciona ouvintes de evento a cada botão
botoes.forEach(function(botao) {
  // Ouvinte de evento para 'mouseover'
  botao.addEventListener('mouseover', function() {
    this.style.backgroundColor = 'orange'; // 'this' se refere ao botão atual
  });

  // Ouvinte de evento para 'mouseout'
  botao.addEventListener('mouseout', function() {
    this.style.backgroundColor = "#4CAF50"; // 'this' se refere ao botão atual
  });

  // Ouvinte de evento para 'click'
  botao1.addEventListener('click', mudarImagemDeFundo);
});
