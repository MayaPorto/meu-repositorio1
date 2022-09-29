function mostrarAlerta() {
    const divAlerta = document.getElementById('alerta')
    divAlerta.classList.add('mostrar')
}

function fecharAlert() {
    const divAlerta = document.getElementById('alerta')
    divAlerta.classList.remove('mostrar')
}