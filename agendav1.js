document.querySelector('#formulario-contato').addEventListener('submit', (e) => {

    e.preventDefault()

    let nome = document.querySelector('#nome').value
    let telefone = document.querySelector('#telefone').value
    let endereço = document.querySelector('#endereço').value
    let email = document.querySelector('#email').value
    let aniversario = document.querySelector('#aniversario').value

    if(nome === ''){
        alert("Por favor, preencha o nome")
    } else if(telefone === ''){
        alert("Por favor, preencha o telefone")
    } else if(endereço === ''){
        alert("Por favor, preencha o endereço")
    } else if(email === ''){
        alert("Por favor, preencha o email")
    } else if(aniversario === ''){
        alert("Por favor, preencha o aniversario") 
    } else {


        document.querySelector('thead').style.visibility = 'visible'

    let corpoTabela = document.querySelector('#lista-contato')
    let linha = document.createElement('tr')
    linha.innerHTML = `
                        <td>${nome}</td>
                        <td>${telefone}</td>
                        <td>${endereço}</td>
                        <td>${email}</td>
                        <td>${aniversario}</td>
                        <td><a href="#" class="btn btn-danger">X</td>    
                    `

    corpoTabela.appendChild(linha)

    alerta('Contato Adicionado!', 'success')
    } 
})

document.querySelector('#lista-contato').addEventListener('click', (e) => {
    if(e.target.classList.contains('btn')){
        e.target.parentElement.parentElement.remove()
        alerta('Contato Removido!', 'danger')
    }
    if(document.querySelector('thead').nextElementSibling.children.length == 0){
        document.querySelector('thead').style.visibility = 'hidden'
    }
})


function alerta(mensagem, tipo){
    let div = document.createElement('div')
    div.className = `alert alert-${tipo}`
    let msg = document.createTextNode(mensagem)
    div.appendChild(msg)

    const container = document.querySelector('.container')
    const formulario = document.querySelector('#formulario-contato')

    container.insertBefore(div, formulario)

    setTimeout(function () {
        document.querySelector('.alert').remove
    }, 3000)
}