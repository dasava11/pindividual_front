const regexOnlyLetters = /^[a-zA-Z\s]+$/;
const regexSpaces = /^\s*$/;
//const regexOnlyNumbers = /^[0-9]+$/;

const validate = (input) => {
  const errors = {};

  if (!input.name || input.name === undefined) {
    errors.name = "El campo no puede estar vacio";
  } else if (input.name.length > 20) {
    errors.name = "El nombre no puede exceder 20 caracteres";
  } else if (!regexOnlyLetters.test(input.name)) {
    errors.name = "El nombre solo puede contener letras";
  } else if (regexSpaces.test(input.name)) {
    errors.name = "El nombre no puede ser un string de espacios";
  }

  if (!input.weight_min || input.weight_min === undefined) {
    errors.weight_min = "El campo no puede estar vacío";
  } else {
    const weight_min = parseInt(input.weight_min);
    if (isNaN(weight_min)) {
      errors.weight_min = "Ingrese un número válido";
    } else if (weight_min < 1) {
      errors.weight_min = "El dato no puede ser menor a 1";
    } else if (weight_min > 90) {
      errors.weight_min = "El dato no puede ser mayor a 90";
    } else if (weight_min >= input.weight_max) {
      errors.weight_min =
        "El valor no puede ser mayor o igual al weight máximo";
    }
  }

  if (!input.weight_max || input.weight_max === undefined) {
    errors.weight_max = "El campo no puede estar vacío";
  } else {
    const weight_max = parseInt(input.weight_max);
    if (isNaN(weight_max)) {
      errors.weight_max = "Ingrese un número válido";
    } else if (weight_max < 1) {
      errors.weight_max = "El dato no puede ser menor a 1";
    } else if (weight_max > 90) {
      errors.weight_max = "El dato no puede ser mayor a 90";
    } else if (weight_max <= input.weight_min) {
      errors.weight_max =
        "El valor no puede ser menor o igual al weight mínimo";
    }
  }

  if (!input.height_min || input.height_min === undefined) {
    errors.height_min = "El campo no puede estar vacío";
  } else {
    const height_min = parseInt(input.height_min);
    if (isNaN(height_min)) {
      errors.height_min = "Ingrese un número válido";
    } else if (height_min < 10) {
      errors.height_min = "El dato no puede ser menor a 10";
    } else if (height_min > 100) {
      errors.height_min = "El dato no puede ser mayor a 100";
    } else if (height_min > input.height_max) {
      errors.height_min =
        "El valor no puede ser mayor o igual al height máximo";
    }
  }

  if (!input.height_max || input.height_max === undefined) {
    errors.height_max = "El campo no puede estar vacío";
  } else {
    const height_max = parseInt(input.height_max);
    if (isNaN(height_max)) {
      errors.height_max = "Ingrese un número válido";
    } else if (height_max < 10) {
      errors.height_max = "El dato no puede ser menor a 10";
    } else if (height_max > 100) {
      errors.height_max = "El dato no puede ser mayor a 100";
    } else if (height_max < input.height_min) {
      errors.height_max =
        "El valor no puede ser menor o igual al height mínimo";
    }
  }

  if (input.life_span === "" || input.life_span === undefined) {
    errors.life_span = "El campo no puede estar vacio";
  } else {
    const life_span = parseInt(input.life_span);
    if (isNaN(life_span)) {
      errors.life_span = "Ingrese un número válido";
    } else if (life_span > 20) {
      errors.life_span = "El valor no puede ser mayor a 20";
    } else if (life_span < 8) {
      errors.life_span = "El valor no puede ser menor a 8";
    }
  }

  input.image === "" && (errors.image = "El campo no puede estar vacio");

  return errors;
};

export default validate;
