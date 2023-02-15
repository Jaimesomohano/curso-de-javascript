const h1 = document.querySelector('h1'); 
const input1 = document.querySelector('#parametro1');
const input2 = document.querySelector('#parametro2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');
const form = document.querySelector('#form')

form.addEventListener('submit', sumar)

function sumar() {
    const sumaInputs = parseInt(input1.value) + parseInt(input2.value);
    pResult.innerText = "resultado: " + sumaInputs
}