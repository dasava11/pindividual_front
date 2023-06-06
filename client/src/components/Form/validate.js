const regexOnlyLetters = /^[a-zA-Z\s]+$/;
const regexOnlyNumbers = /^[0-9]+$/;
/* const regexURL = /^https/; */

const validate = (input) => {
  const errors = {};

  input.name === "" ||
    input.name.length > 20 ||
    (!regexOnlyLetters.test(input.name) &&
      (errors.name =
        "El nombre no puede exceder 20 caracteres y solo puede contener letras, tampoco puede estar vacio"));

  input.height_min === "" ||
    input.height_min.length > 3 ||
    (!regexOnlyNumbers.test(input.height_min) &&
      (errors.height_min =
        "El dato no puede exceder 2 digitos y solo debe tener números, tampoco puede estar vacio"));

  input.height_max === "" ||
    input.height_max.length > 3 ||
    (!regexOnlyNumbers.test(input.height_max) &&
      (errors.height_max =
        "El dato no puede exceder 2 digitos y solo debe tener números, tampoco puede estar vacio"));

  input.weight_min === "" ||
    input.weight_min.length > 3 ||
    (!regexOnlyNumbers.test(input.weight_min) &&
      (errors.weight_min =
        "El dato no puede exceder 2 digitos y solo debe tener números, tampoco puede estar vacio"));

  input.weight_max === "" ||
    input.weight_max.length > 3 ||
    (!regexOnlyNumbers.test(input.weight_max) &&
      (errors.weight_max =
        "El dato no puede exceder 2 digitos y solo debe tener números, tampoco puede estar vacio"));

  input.life_span === "" ||
    input.life_span.length > 3 ||
    (!regexOnlyNumbers.test(input.life_span) &&
      (errors.life_span =
        "El dato no puede exceder 2 digitos y solo debe tener números, tampoco puede estar vacio"));

  /* !regexURL.test(input.image) &&
    (errors.image = "El formato de anexar la imagen es incorrecto"); */

  return errors;
};

export default validate;
