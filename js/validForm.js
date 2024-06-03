(function () {
    'use strict';

    let forms = document.querySelectorAll('.needs-validation');

    Array.prototype.slice.call(forms).forEach(function (form) {
        form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            } else {
                event.preventDefault();
                let myModal = new bootstrap.Modal(document.getElementById('thankYouModal'));
                myModal.show();
                form.reset();
                setTimeout(function () {
                    resetValidation(form);
                }, 500);  // Espera medio segundo antes de restablecer la validación para asegurarse de que el formulario se ha restablecido completamente.
            }
            form.classList.add('was-validated');
        }, false);

        form.addEventListener('reset', function () {
            resetValidation(form);
        });
    });

    function resetValidation(form) {
        form.classList.remove('was-validated');
        let fields = form.querySelectorAll('.form-control');
        Array.prototype.slice.call(fields).forEach(function (field) {
            field.classList.remove('is-invalid');
            field.classList.remove('is-valid');
        });
    }

})();
