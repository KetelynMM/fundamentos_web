/*
Case Sensitive = reconhece letras maiusculas e minusculas

por Tag: getElementByTagName()
por Id: getElementById()
por Nome: getElementByName()
por Classe: getElementByClassName()
por Seletor: querySelector()
*/

let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let mensagem = document.querySelector('#mensagem')
let nomeOk = false
let emailOk = false
let mensagemOk = false

nome.style.width = '100%'
email.style.width = '100%'

function validaNome() {

    let txt = document.querySelector('#txtNome')
    if (nome.value.length < 3) {
        txt.innerHTML = 'Nome inválido'
        txt.style.color = 'red'
    } else {
        txt.innerHTML = 'Nome válido'
        txt.style.color = 'green'
        nomeOk = true
    }
}

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')

    if(email.value.indexOf('@') == -1 || email.value.indexOf('.')) {
        txtEmail.innerHTML = 'E-mail inválido'
        txtEmail.style.color = 'red'
    } else {
        txtEmail.innerHTML = 'E-mail válido'
        txtEmail.style.color = 'green'
        emailOk = true
    }
}

function validaMensagem() {
    let txtMensagem = document.querySelector('#txtMensagem')

    if(mensagem.value.length >= 100) {
        txtMensagem.innerHTML = 'Texto muito grande, digite no máximo 100 caracteres'
        txtMensagem.style.color = 'red'
        txtMensagem.style.display = 'block'
    } else {
        txtMensagem.style.display = 'none'
        mensagemOk = true
    }
}

function enviar() {
    if (nomeOk == true && emailOk == true && mensagemOk == true) {
        alert ('Formulário enviado com sucesso!')
    }else {
        alert ('Preencha o formulário corretamente antes de enviar...')
    }
}