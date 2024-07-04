// Exemplo de uso de JavaScript no site

// Função para validar formulário de contato
function validarFormulario() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    if (!nome || !email || !mensagem) {
        alert('Por favor, preencha todos os campos.');
        return false;
    }

    // Aqui você poderia adicionar lógica adicional, como enviar os dados para um servidor ou exibir uma mensagem de sucesso
    console.log('Formulário enviado com sucesso!');
    return true;
}

// Exemplo de uso de JavaScript para manipular eventos
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário
    validarFormulario();
});
