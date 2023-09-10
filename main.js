const form = document.getElementById('form-verifica');
const campo_A = document.getElementById('campoA');
const campo_B = document.getElementById('campoB');
let  formEValido = false;

function validaCampo(campo_A,campo_B) {
    const campoComoArray = campo_B - campo_A;
    return campoComoArray > 0;

}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const mensagemSucesso = `O valor do campo A: R$ <b> ${campo_A.value}</b> e o valor do campo B: R$<b> ${campo_B.value} </b> foram enviados com sucesso.`;

    formEValido = validaCampo(campo_A.value,campo_B.value)
    if (formEValido) {
        const containerMensagemSucesso = document.querySelector(`.success-message`);
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = `block`;

        campo_A.value = "";
        campo_B.value = "";
        
        
    } else {
        campo_A.style.border = '1px solid red';
        document.querySelector('.error-message').style.display = 'block';
        
        
    }

})

campo_A.addEventListener('keyup', function(e) {
    console.log(e.target.value);
    
    if (!formEValido) {
        campo_A.classList.add('error');
        document.querySelector('error-message').style.display = 'block';

    } else {
        campo_A.classList.remove('error');
        document.querySelector('.error-message').style.display = 'none';

    }
});
/* >>>>>>>>codigo com alert<<<<<<<<
const form = document.getElementById('form-verifica');

function validaCampo(campo_A,campo_B) {
    const campoComoArray = campo_B - campo_A;
    return campoComoArray > 0;

}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const campo_A = document.getElementById('campoA');
    const campo_B = document.getElementById('campoB');
    if (!validaCampo(campo_A.value,campo_B.value)) {
        alert("O campo A tem que ser menor que o campo B");
    } else {
        alert("Tudo ok, formulário enviado!")

        campo_A.value = "";
        campo_B.value = "";
    }

})
console.log(form)*/

