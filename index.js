let originalText = document.getElementById('efectoJS').innerText;
let clicked = false;

function cambio() {
    const texto = document.getElementById('efectoJS');
    
    if (clicked) {
        // Si ya se hizo clic antes, se restaura el texto original
        texto.innerText = originalText;
        clicked = false;
    } else {
        // Si es la primera vez que se hace clic, se cambia el texto
        texto.innerText = 'Texto modificado...';
        clicked = true;
    }
}

    const txt1 = document.getElementById('horita');
    let d = new Date();
    txt1.innerText = "La ha actual es:  " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds()

    function actualizarHora() {
        const txt1 = document.getElementById('horita2');
        let d = new Date();
        txt1.innerText = "La hora actual es: " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
    }
    
    // Actualizar la hora cada segundo (1000 milisegundos)
    setInterval(actualizarHora, 1000);
    