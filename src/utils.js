"use strict"

const valor = parseFloat(document.getElementById('valor').innerHTML);

const qtd = document.getElementById('qtd');
qtd.addEventListener('change', calc, false);

const button = document.getElementById('comprar');
button.addEventListener('click', submit, false);

function calc(){
    const total = document.getElementById('total');
    total.innerHTML = 
    (valor * qtd.value).toLocaleString('pt-br', {minimumFractionDigits: 2});;
}

function submit(){
    let nome = document.getElementById('nome').value;
    alert(`Olá, ${nome}! Sua mensagem foi enviada com sucesso`);
}