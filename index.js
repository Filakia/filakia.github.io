// Establecer la fecha de lanzamiento del producto (reemplaza con tu fecha y hora)
var launchDate = new Date('2024-08-01T00:00:00Z');

// Función para actualizar el contador de cuenta regresiva
function updateCountdown() {
    var currentDate = new Date();
    var timeDifference = launchDate - currentDate;

    var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    var countdownTimer = document.getElementById('countdown-timer');
    if (countdownTimer) {
        countdownTimer.innerHTML = days + ' : ' + hours + ' : ' + minutes + ' : ' + seconds + '';
    }

    // Actualizar cada segundo
    setTimeout(updateCountdown, 1000);
}

// Iniciar el contador de cuenta regresiva al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    updateCountdown();
});

document.getElementById('email-registration-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío del formulario por defecto

    var email = document.getElementById('email').value;

    // Enviar correo electrónico a la dirección deseada (hola@filakia.es)
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://api.filakia.es/send-email', true); // Reemplaza 'https://api.filakia.es/send-email' con la URL de tu API de correo

    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            alert('Gracias por registrarte. Tu correo ha sido enviado correctamente.');
            document.getElementById('email').value = ''; // Limpiar el campo de correo electrónico después del envío
        }
    };

    var data = JSON.stringify({ email: email });
    xhr.send(data);
});
