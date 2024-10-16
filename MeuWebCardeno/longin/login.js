const cadastreBotao = document.getElementById('Cadastre');
const entrarBotao = document.getElementById('Entrar');
const container = document.getElementById('container');

const mensagemErroCadastro = document.getElementById('mensagemErroCadastro');


cadastreBotao.addEventListener('click', () => {
  container.classList.add("right-panel-active");
});

entrarBotao.addEventListener('click', () => {
  container.classList.remove("right-panel-active");
});



document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.querySelector('.sign-up-container form');
    const loginForm = document.querySelector('.sign-in-container form');
    
    // Captura o elemento onde as mensagens de erro aparecerão
    const mensagemErroCadastro = document.getElementById('mensagemErroCadastro');

    signupForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio do formulário
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('emailCadastro').value;
        const senha = document.getElementById('senhaCadastro').value;

        // Limpa mensagem de erro a cada tentativa de submissão
        mensagemErroCadastro.innerHTML = '';

        if (nome === '' || email === '' || senha === '') {
            mensagemErroCadastro.innerHTML = 'Por favor, preencha todos os campos!';
            mensagemErroCadastro.style.color = 'red';
            return;
        }

        // Função de validação da senha
        function validarSenha(senha) {
            const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
            return regex.test(senha);
        }

        // Verifica se a senha atende aos requisitos
        if (!validarSenha(senha)) {
            mensagemErroCadastro.innerHTML = 'A senha deve ter pelo menos 8 caracteres, incluindo uma letra maiúscula, uma minúscula e um número.';
            mensagemErroCadastro.style.color = 'red';
            return;
        }

        // Função de validação de email
        function validarEmail(email) {
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return regex.test(email);
        }

        // Verifica se o email é válido
        if (!validarEmail(email)) {
            mensagemErroCadastro.innerHTML = 'Por favor, insira um e-mail válido.';
            mensagemErroCadastro.style.color = 'red';
            return;
        }

        // Se todas as validações passarem
        alert('Cadastro realizado com sucesso!');
        // signupForm.submit(); // Descomente se quiser enviar o formulário de verdade
    });

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio do formulário
        const email = document.getElementById('emailLogin').value;
        const senha = document.getElementById('senhaLogin').value;

        mensagemErroLogin.innerHTML = '';

        if (email === '' || senha === '') {
            mensagemErroLogin.innerHTML = 'Por favor, preencha todos os campos!';
            mensagemErroLogin.style.color = 'red';
            return;
        }

        function validarEmail(email) {
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return regex.test(email);
        }

        if (!validarEmail(email)) {
            mensagemErroLogin.innerHTML = 'Por favor, insira um e-mail válido.';
            mensagemErroLogin.style.color = 'red';
            return;
        }

        // Aqui você pode adicionar a lógica para autenticar o usuário
        alert('Login realizado com sucesso!'); // Placeholder, substitua pela lógica real

        // Validações adicionais podem ser feitas aqui
    });
});


