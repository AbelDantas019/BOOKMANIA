const form = document.getElementById('cadastroForm')

form.addEventListener('submit', function(event) {
  event.preventDefault()
  const nome = document.getElementById('nome').value
  const email = document.getElementById('email').value
  const senha = document.getElementById('senha').value

  // Criar objeto com os dados do usuário
  const usuario = {
    nome: nome,
    email: email,
    senha: senha
  }
  // Salvar o objeto no LocalStorage
  localStorage.setItem('usuario', JSON.stringify(usuario))
  // form.reset()
  alert('Cadastro realizado com sucesso! Clique em \'OK\' e faça login.')
  window.location.href = './index.html'
});
  