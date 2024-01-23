let numeroSecreto;
let intentos;
let listaNumerosUsados = [];
let numeroMax = 10;



function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUs').value);
    
    console.log(numeroSecreto);
    console.log(intentos);
    if (numeroSecreto === numeroDeUsuario){
        asignarTextoElemento('H1', 'FELICIDADES');
        asignarTextoElemento('P', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'tu  primer intento' : 'intentos'}`);

        document.getElementById('reiniciar').removeAttribute('disabled');

    }else{
        asignarTextoElemento('H1', 'Error');
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('P', 'El número secreto es menor');
        }else{
            asignarTextoElemento('P', 'El número secreto es mayor');
        }

        intentos++;
        limpiarCaja();
    }



    return;
}

function generarNumeroSecreto() {
    let numeroGen = Math.floor(Math.random()*numeroMax)+1;
    console.log(listaNumerosUsados);
    //Ver si ya usamos todos los numeros
    if(listaNumerosUsados.length == numeroMax){
        asignarTextoElemento('H1', 'FIN');
        asignarTextoElemento('P', 'Ya se utilizaron todos los números secretos');
        document.querySelector('#intentos').setAttribute('disabled', 'true');
    }else{
           //Si el numero generado esta en la lista
    if(listaNumerosUsados.includes(numeroGen)){
        return generarNumeroSecreto();
    }else{
        listaNumerosUsados.push(numeroGen);
        return numeroGen;
    }
    }

}

function limpiarCaja(){
    document.querySelector('#valorUs').value = '';
}

function condicionesIniciales(){
    asignarTextoElemento('H1', 'TopSecret The Game');
    asignarTextoElemento('P', `Indica un número del 1 al ${numeroMax}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(numeroSecreto);
}

function reiniciarJuego(){
    //Limpiar la caja
    limpiarCaja();
    //Indicar Mensaje de intervalo de números
    //Indicar el mensaje del nombre del juego
    //Inicializar el número de intentos
    //Generar el número aleatorio
    condicionesIniciales();
    
    //Desabilitar el boton de nuevo juego 
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');

}

condicionesIniciales();