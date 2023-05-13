const validation = (userData) => {
  const errors = {};

  if (!/\S+@\S+\.\S+/.test(userData)) {
    errors.email = "el email es invalido";
  }
  if (!userData.email) {
    errors.email = "Ingrese un email válido ";
  }
  if (userData.email.length > 35) {
    errors.email = "No debe superar los 35 caracteres";
  }
  if (/^(?=.[A-Za-z])(?=.\d)[A-Za-z\d]{8,}$/.test(userData.password)) {
    errors.password = "la contraseña debe tener al menos un  numero y un caracter";
  }
  if(userData.password.length < 6 || userData.password.length > 10){
    errors.password = "Debe tener entre 6 y 10 caracteres";
  }

  return errors;
};

export default validation;
