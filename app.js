window.addEventListener("load", function() {
    var florUno = document.querySelector('.flor-izq-1');
    var florDos = document.querySelector('.flor-izq-2');
    var florTres = document.querySelector('.flor-izq-3');
    var florCuatro = document.querySelector('.flor-izq-4');
    florUno.classList.add('mostrar-y');
    florDos.classList.add('mostrar-x');
    florTres.classList.add('mostrar-y');
    florCuatro.classList.add('mostrar-x-1');
});

// Fecha objetivo para el contador de cuenta regresiva (año, mes [0-11], día, hora, minutos, segundos)
const fechaObjetivo = new Date('2024-12-31T23:59:59').getTime();

// Actualizar el contador cada segundo
const intervalo = setInterval(function () {
    const ahora = new Date().getTime();
    const diferencia = fechaObjetivo - ahora;

    // Calcular días, horas, minutos y segundos restantes
    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    // Mostrar el contador en el elemento con el id "contador"
    const contadorElemento = document.getElementById("contador");
    contadorElemento.innerHTML = `Falta ${dias} días, ${horas} horas, ${minutos} minutos, y ${segundos} segundos`;

    // Si el contador llega a cero, detener el intervalo
    if (diferencia < 0) {
        clearInterval(intervalo);
        contadorElemento.innerHTML = "¡Feliz Año Nuevo!";
    }
}, 1000); // Actualizar cada segundo
