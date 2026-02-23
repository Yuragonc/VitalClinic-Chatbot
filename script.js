// --- FUNCIÓN DEL CHATBOT ---
function enviarMensaje() {
    let input = document.getElementById("user-input");
    let chatBody = document.getElementById("chat-body");
    let userMsg = input.value.trim();

    if (userMsg === "") return;

    chatBody.innerHTML += `<div class="user-text">${userMsg}</div>`;
    input.value = "";

    let botRes = "En VitalClinic te ayudamos. Prueba preguntando por 'especialidades' o 'agendar'.";
    let texto = userMsg.toLowerCase();

    if (texto.includes("hola")) botRes = "¡Bienvenido a VitalClinic! ¿En qué puedo apoyarte con tu cita?";
    else if (texto.includes("especialidad")) botRes = "Contamos con Cardiología, Pediatría y Medicina General.";
    else if (texto.includes("cita") || texto.includes("agendar")) botRes = "Llena el formulario del centro y presiona 'Crear Cita'.";

    setTimeout(() => {
        chatBody.innerHTML += `<div class="bot-text"><b>Bot:</b> ${botRes}</div>`;
        chatBody.scrollTop = chatBody.scrollHeight;
    }, 600);
}

// --- CONEXIÓN FORMULARIO -> CHATBOT ---
document.getElementById('form-cita').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const paciente = document.getElementById('nombre-paciente').value;
    const chatBody = document.getElementById('chat-body');

    // El chatbot reacciona a la acción del usuario
    setTimeout(() => {
        chatBody.innerHTML += `<div class="bot-text" style="border: 1px solid #2ca08e;">
            <b>Asistente:</b> ¡Excelente! He registrado la cita para <b>${paciente}</b> en el sistema de VitalClinic.
        </div>`;
        chatBody.scrollTop = chatBody.scrollHeight;
        alert("Cita creada y notificada al asistente virtual.");
    }, 800);
});