const form = document.querySelector('form');
const mensagem = document.getElementById('mensagem');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // evita envio real da página

  // Esconde o formulário
  form.style.display = 'none';

  // Mostra a mensagem de obrigado
  mensagem.style.display = 'block';
});
