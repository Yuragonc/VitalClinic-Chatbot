// --- LÓGICA DEL CHATBOT VITALCLIN ---
function enviarMensaje() {
    let input = document.getElementById("user-input");
    let chatBody = document.getElementById("chat-body");
    let msg = input.value.trim();

    if (msg === "") return;

    // Mostrar mensaje usuario
    chatBody.innerHTML += `<div class="user-text">${msg}</div>`;
    input.value = "";

    let respuesta = "Lo siento, no entiendo. Prueba con 'citas', 'horario' o 'especialidades'.";
    let texto = msg.toLowerCase();

    if (texto.includes("cita") || texto.includes("agendar")) {
        respuesta = "Para agendar, usa el formulario 'Agendar Nueva Cita' que ves en pantalla.";
    } else if (texto.includes("horario")) {
        respuesta = "Atendemos en VitalClinic de Lunes a Sábado, de 7:00 AM a 7:00 PM.";
    } else if (texto.includes("especialidad")) {
        respuesta = "Contamos con Medicina General, Pediatría, Odontología y Cardiología.";
    } else if (texto.includes("hola")) {
        respuesta = "¡Hola! ¿Cómo podemos ayudarte hoy en VitalClinic?";
    }

    setTimeout(() => {
        chatBody.innerHTML += `<div class="bot-text"><b>Bot:</b> ${respuesta}</div>`;
        chatBody.scrollTop = chatBody.scrollHeight;
    }, 600);
}

// --- LÓGICA DEL FORMULARIO DE CITAS ---
const formCita = document.getElementById('form-cita');
const contenedorCitas = document.getElementById('contenedor-citas');

formCita.addEventListener('submit', function(e) {
    e.preventDefault();

    const nombre = document.getElementById('nombre-paciente').value;
    const especialidad = document.getElementById('especialidad').value;
    const fecha = document.getElementById('fecha-cita').value;

    // Eliminar mensaje de "no hay citas" si existe
    if (contenedorCitas.querySelector('.empty-msg')) {
        contenedorCitas.innerHTML = '';
    }

    // Crear la tarjeta de la cita
    const citaDiv = document.createElement('div');
    citaDiv.className = 'cita-item';
    citaDiv.innerHTML = `
        <span><strong>${nombre}</strong> - ${especialidad}</span>
        <span>📅 ${fecha}</span>
    `;

    contenedorCitas.appendChild(citaDiv);

    // Resetear formulario y avisar
    formCita.reset();
    alert("¡Cita registrada con éxito en VitalClinic!");
});