const form = document.getElementById("myForm");


// Función para ocultar los iconos al recargar la página
function hideIcons() {

    const redIconName = document.getElementById("rojo-icon-name");
    const redIconEmail = document.getElementById("rojo-icon-email");
    const redIconPassword = document.getElementById("rojo-icon-password");
    const redIconConfirm_password = document.getElementById("rojo-icon-confirm_password");

    const greenIconName = document.getElementById("verde-icon-name");
    const greenIconEmail = document.getElementById("verde-icon-email");
    const greenIconPassword = document.getElementById("verde-icon-password");
    const greenIconConfirm_password = document.getElementById("verde-icon-confirm_password");

    redIconName.style.display = "none";
    greenIconName.style.display = "none";
    redIconEmail.style.display = "none";
    greenIconEmail.style.display = "none";
    redIconPassword.style.display = "none";
    greenIconPassword.style.display = "none";
    redIconConfirm_password.style.display = "none";
    greenIconConfirm_password.style.display = "none";
}


// Función para validar los campos de nombre, email, etc
function validateField(event) {
    const nameInput = document.getElementById("name");
    const nameError = document.getElementById("name-error");
    const emailInput = document.getElementById("email");
    const emailError = document.getElementById("email-error");
    const passwordInput = document.getElementById("password");
    const passwordError = document.getElementById("password-error");
    const confirmPasswordInput = document.getElementById("confirm_password");
    const confirmPasswordError = document.getElementById("confirm_password-error");

    const redIconName = document.getElementById("rojo-icon-name");
    const greenIconName = document.getElementById("verde-icon-name");
    const redIconEmail = document.getElementById("rojo-icon-email");
    const greenIconEmail = document.getElementById("verde-icon-email");
    const redIconPassword = document.getElementById("rojo-icon-password");
    const greenIconPassword = document.getElementById("verde-icon-password");
    const redIconConfirmPassword = document.getElementById("rojo-icon-confirm_password");
    const greenIconConfirmPassword = document.getElementById("verde-icon-confirm_password");

    // Booleana en True por defecto y false si: 
    let fieldValid = true;

    // Nombre vacio, caracteres numericos o <2 o >60
    if (nameInput.value.trim() === "") {
        nameError.innerHTML = "Rellene el campo";
        nameInput.style.borderColor = "red";
        redIconName.style.display = "inline";
        greenIconName.style.display = "none";
        fieldValid = false;
    } else if (!/^[A-Za-z]{2,60}$/.test(nameInput.value)) {
        nameError.innerHTML = "No admite caracteres numéricos";
        nameInput.style.borderColor = "red";
        redIconName.style.display = "inline";
        greenIconName.style.display = "none";
        fieldValid = false;
    } else {
        nameError.innerHTML = "";
        nameInput.style.borderColor = "green";
        greenIconName.style.display = "inline";
        redIconName.style.display = "none";
    }

     // Email vacio o no coincide con un patron como xxx@xxx.xxx
    if (emailInput.value.trim() === "") {
        emailError.innerHTML = "Rellene el campo";
        emailInput.style.borderColor = "red";
        redIconEmail.style.display = "inline";
        greenIconEmail.style.display = "none";
        fieldValid = false;
    } else if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(emailInput.value)) {
        emailError.innerHTML = "Email no válido";
        emailInput.style.borderColor = "red";
        redIconEmail.style.display = "inline";
        greenIconEmail.style.display = "none";
        fieldValid = false;
    } else {
        emailError.innerHTML = "";
        emailInput.style.borderColor = "green";
        greenIconEmail.style.display = "inline";
        redIconEmail.style.display = "none";
    }

    // Contraseña vacia, contiene caracteres no alfanumericos o tiene <4 o >8
    if (passwordInput.value.trim() === "") {
        passwordError.innerHTML = "Rellene el campo";
        passwordInput.style.borderColor = "red";
        redIconPassword.style.display = "inline";
        greenIconPassword.style.display = "none";
        fieldValid = false;
    } else if (!/^[A-Za-z0-9]{4,8}$/.test(passwordInput.value)) {
        passwordError.innerHTML = "La contraseña debe tener entre 4 y 8 caracteres alfanuméricos";
        passwordInput.style.borderColor = "red";
        redIconPassword.style.display = "inline";
        greenIconPassword.style.display = "none";
        fieldValid = false;
    } else {
        passwordError.innerHTML = "";
        passwordInput.style.borderColor = "green";
        greenIconPassword.style.display = "inline";
        redIconPassword.style.display = "none";
    }

    //Confirmar contraseña vacia, o no coincide con campo contraseña
    if (confirmPasswordInput.value.trim() === "") {
        confirmPasswordError.innerHTML = "Rellene el campo";
        confirmPasswordInput.style.borderColor = "red";
        redIconConfirmPassword.style.display = "inline";
        greenIconConfirmPassword.style.display = "none";
        fieldValid = false;
    } else if (confirmPasswordInput.value !== passwordInput.value) {
        confirmPasswordError.innerHTML = "Las contraseñas no coinciden";
        confirmPasswordInput.style.borderColor = "red";
        greenIconConfirmPassword.style.display = "none";
        redIconConfirmPassword.style.display = "inline";
        fieldValid = false;
    } else {
        confirmPasswordError.innerHTML = "";
        confirmPasswordInput.style.borderColor = "green";
        greenIconConfirmPassword.style.display = "inline";
        redIconConfirmPassword.style.display = "none";
    }

    return fieldValid;
}


// Función para validar el formulario al dar a enviar, alerta de "todo bien" si todos los campos se han validado o 
//alerta "revisar" si algún campo es False
function validateForm(event) {
    event.preventDefault();

    const valid = validateField();

    if (valid === true) {
        alert("Su inscripción se ha realizado correctamente");
        form.submit();
    } else {
        alert("Información incompleta. Revise los campos");
    }
}

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm_password");

// Validar campo en cuanto sales de él:
nameInput.addEventListener("blur", validateField);
emailInput.addEventListener("blur", validateField);
passwordInput.addEventListener("blur", validateField);
confirmPasswordInput.addEventListener("blur", validateField);

// Validar formulario cuando le das a enviar
form.addEventListener("submit", validateForm);