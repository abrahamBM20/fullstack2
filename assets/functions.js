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