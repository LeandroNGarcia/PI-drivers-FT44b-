export const isName = (name) => {
  if (!name) return "La casilla no puede estar vacia";
  const divName = name.split("");
  if (!/^[a-zA-Z]+$/.test(name)) {
    return "El nombre solo puede contener letras";
  }

  if (divName[0] !== divName[0].toUpperCase()) {
    return "El nombre debe comenzar con mayúscula";
  }
};

export const isLastname = (lastname) => {
  if (!lastname) return "La casilla no puede estar vacia";
  const divLastname = lastname.split("");
  if (!/^[a-zA-Z]+$/.test(lastname)) {
    return "El apellido solo puede contener letras";
  }
  if (divLastname[0] !== divLastname[0].toUpperCase()) {
    return "El apellido debe comenzar con mayúscula";
  }
};