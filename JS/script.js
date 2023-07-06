function login() {
    const email = document.getElementById('email').value
    const senha = document.getElementById('senha').value

    // Recupera os dados do usuário do LocalStorage
    const usuarioSalvo = localStorage.getItem('usuario')
    const usuario = JSON.parse(usuarioSalvo)

    if (usuario && email === usuario.email && senha === usuario.senha) {
        alert('Login realizado com sucesso!')
        window.location.href = './principal.html'
    } else {
        alert('Email ou senha inválidos!')
    }
}
