function captureValue(inputId, displayId, label) {
            const input = document.getElementById(inputId);
            const display = document.getElementById(displayId);
            
            input.addEventListener('change', function() {
                display.textContent = `${label}: ${this.value || 'Vacío'}`;
                console.log(`${label} capturado:`, this.value);
            });
        }

        // Configurar la captura para ambos campos
        captureValue('user', 'userValue', 'Usuario');
        captureValue('email', 'emailValue', 'Email');