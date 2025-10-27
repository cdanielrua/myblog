
// Minimal JS: contact form validation and basic enhancements
document.addEventListener('DOMContentLoaded', function(){
  const form = document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit', function(e){
      const name = form.querySelector('input[name="name"]').value.trim();
      const email = form.querySelector('input[name="email"]').value.trim();
      const msg = form.querySelector('textarea[name="message"]').value.trim();
      if(!name || !email || !msg){
        e.preventDefault();
        alert('Por favor completa todos los campos antes de enviar.');
      } else {
        // Allow mailto fallback; show message that email client will open
        alert('Se abrirá tu cliente de correo para enviar el mensaje. Si no lo deseas, copia y escribe a hello@danielrua.com');
      }
    });
  }
});
