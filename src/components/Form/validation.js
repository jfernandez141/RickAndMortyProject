const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexPassword = /^(?=.*\d)[A-Za-z\d]{6,10}$/i;

export function validate(input) {
  const errors = {};
  if (!regexEmail.test(input.email)) {
    errors.email = "Por favor ingresa un email valido";
  }
  if (!regexPassword.test(input.password)) {
    errors.password = "Contraseña invalida";
  }

  return errors;
}
