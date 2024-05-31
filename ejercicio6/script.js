document.getElementById('validation-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const apellido = document.getElementById('apellido').value.trim();
    const edad = parseInt(document.getElementById('edad').value);
    const altura = parseInt(document.getElementById('altura').value);
    const email = document.getElementById('email').value.trim();

    let mensaje = '';
    let valido = true;

    if (nombre === '' || apellido === '') {
        mensaje += 'El nombre y el apellido no pueden estar vacíos.<br>';
        valido = false;
    }
    if (nombre.length > 50 || apellido.length > 50) {
        mensaje += 'El nombre y el apellido no pueden tener más de 50 caracteres.<br>';
        valido = false;
    }

    if (isNaN(edad) || edad < 0) {
        mensaje += 'La edad no puede ser negativa.<br>';
        valido = false;
    } else if (edad < 18) {
        mensaje += 'Debe ser mayor de edad.<br>';
        valido = false;
    }

    if (isNaN(altura) || altura < 0) {
        mensaje += 'La altura no puede ser negativa.<br>';
        valido = false;
    } else if (altura > 230) {
        mensaje += 'La altura no puede ser mayor a 230 cm.<br>';
        valido = false;
    }


    if (email === '' || !email.includes('@')) {
        mensaje += 'El correo electrónico no puede estar vacío y debe incluir el "@"<br>';
        valido = false;
    }

    const resultado = document.getElementById('resultado');
    if (valido) {
        resultado.innerHTML = 'Todos los datos son válidos.';
        resultado.className = 'success';
    } else {
        resultado.innerHTML = mensaje;
        resultado.className = 'error';
    }
});
