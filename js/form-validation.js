
const form = document.getElementById('form-voluntario');

function validarFormulario(event) {
    event.preventDefault(); 

    let temErro = false;


    const nomeInput = document.getElementById('nome');
    const emailInput = document.getElementById('email');
    

    if (nomeInput.value.trim().length < 3) {
        mostrarErro(nomeInput, true);
        temErro = true;
    } else {
        mostrarErro(nomeInput, false);
    }

    if (!emailInput.value.includes('@') || !emailInput.value.includes('.')) {
        mostrarErro(emailInput, true);
        temErro = true;
    } else {
        mostrarErro(emailInput, false);
    }

    if (!temErro) {
        alert("Inscrição enviada com sucesso! Bem-vindo ao time.");
        form.reset(); 
    }
}

function mostrarErro(input, mostrar) {
    const spanErro = input.nextElementSibling; 
    
    if (mostrar) {
        input.classList.add('erro'); 
        spanErro.style.display = 'block'; 
    } else {
        input.classList.remove('erro');
        spanErro.style.display = 'none';
    }
}

if (form) {
    form.addEventListener('submit', validarFormulario);
}