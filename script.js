document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario por defecto

    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;

    alert(`Gracias por tu mensaje, ${nombre}! Te responderé pronto.`);
    
    // Aquí puedes agregar lógica para enviar el formulario a un servidor si lo deseas.
    
    // Limpia el formulario después de enviar
    this.reset();
});
