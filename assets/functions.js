
function validarUsuario(inputId, label) {
            const input = document.getElementById(inputId);
            // 2. Crear elemento para mostrar mensajes
            const mensajeError = document.createElement('div');
            mensajeError.style.color = 'red';
            mensajeError.style.marginTop = '5px';
            // 3. Insertar el mensaje después del input
            input.parentNode.appendChild(mensajeError);            
            input.addEventListener('change', function() {
                console.log(`${label} capturado:`, this.value);
                if(this.value.length < 3){
                    console.log("nombre muy corto");
                    mensajeError.textContent = 'Nombre muy corto (mínimo 3 caracteres)';
                }else{
                    console.log("usuario correcto");
                    mensajeError.textContent = ' ';
                };
            });
        }
        validarUsuario('user', 'Usuario');

function validarEmail(inputId, label) {
            const input = document.getElementById(inputId);
            // 2. Crear elemento para mostrar mensajes
            const mensajeError = document.createElement('div');
            mensajeError.style.color = 'red';
            mensajeError.style.marginTop = '5px';
            // 3. Insertar el mensaje después del input
            input.parentNode.appendChild(mensajeError);
            input.addEventListener('change', function() {
                console.log(`${label} capturado:`, this.value);
                if(this.value.length < 12){
                    mensajeError.textContent = 'Email muy corto (mínimo 12 caracteres)';
                }else{
                    if(this.value.includes('@')){
                        mensajeError.textContent = ' ';
                    }else{
                        mensajeError.textContent = 'Correo no contiene "@"';
                    }
                };
            });
        }
function compararEmail(inputId1, inputId2) {
            const input = document.getElementById(inputId1);
            const input2 = document.getElementById(inputId2);
            const mensajeError = document.createElement('div');
            mensajeError.style.color = 'red';
            mensajeError.style.marginTop = '5px';
            input2.parentNode.appendChild(mensajeError);
            input2.addEventListener('change', function() {
                if(input.value === input2.value){
                    console.log('bien');
                    mensajeError.textContent = ' ';
                } else{
                    console.log('mal');
                    mensajeError.textContent = 'Ingrese el mismo correo..!';
                }
            });
}

        validarEmail('correo', 'Correo');
        compararEmail('correo', 'correo1');

function validarPass(inputId){
    const input = document.getElementById(inputId);
    const mensajeError = document.createElement('div');
    mensajeError.style.color = 'red';
    mensajeError.style.marginTop = '5px';
    input.parentNode.appendChild(mensajeError);
    input.addEventListener('change', function() {
        const contrasenia = input.value;
        //regExp para validar:
        const tieneNumero = /[0-9]/.test(contrasenia);
        const tieneEspecial = /[!@#$%^&*(),.?":{}|<>]/.test(contrasenia);
        if(tieneNumero && tieneEspecial){
            console.log("Contraseña válida: tiene número y carácter especial");
            mensajeError.textContent = ' ';
        } else {
            console.log("Contraseña inválida: debe tener número y carácter especial");
            mensajeError.textContent = 'Debe contener número y caracter especial';
        }
    });
}

function compararPass(inputId1, inputId2) {
            const input = document.getElementById(inputId1);
            const input2 = document.getElementById(inputId2);
            const mensajeError = document.createElement('div');
            mensajeError.style.color = 'red';
            mensajeError.style.marginTop = '5px';
            input2.parentNode.appendChild(mensajeError);
            input2.addEventListener('change', function() {
                if(input.value === input2.value){
                    console.log('bien');
                    mensajeError.textContent = ' ';
                } else{
                    console.log('mal');
                    mensajeError.textContent = 'Ingrese la misma Contraseña..!';
                }
            });
}

validarPass('pass');
compararPass('pass','pass2');

