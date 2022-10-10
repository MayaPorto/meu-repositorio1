function mostrarAlerta() {
    const divAlerta = document.getElementById('alerta')
    divAlerta.classList.add('mostrar')
}

function fecharAlert() {
    const divAlerta = document.getElementById('alerta')
    divAlerta.classList.remove('mostrar')
}

const btnMostrar = document.getElementById('mostrar')
const btnFechar = document.getElementById('fechar')

btnMostrar.addEventListener('click', mostrarAlerta)