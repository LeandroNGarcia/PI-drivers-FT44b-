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

export const isNationality = (nationality) => {
  if (!nationality) return "La casilla no puede estar vacia";
  const divNationality = nationality.split("");
  if (!/^[a-zA-Z]+$/.test(nationality)) {
    return "La nacionalidad solo puede contener letras";
  }
  if (divNationality[0] !== divNationality[0].toUpperCase()) {
    return "La nacionalidad debe comenzar con mayúscula";
  }
};
export const isBirthday = (birthday) => {
  if (!birthday) return "La casilla no puede estar vacia";
  const divBirthday = birthday.split("");
  if (!divBirthday.includes("-")) {
    return "Las fechas deben estar separadas por '-'";
  }
  const divBirth = birthday.split("-");
  if (!(12 >= Number(divBirth[1])) || !(Number(divBirth[1]) >= 1))
    return "Escriba un mes valido";
  if (divBirth.length !== 3) return "Escriba una fecha valida";
  if (
    divBirth[0].length !== 4 ||
    divBirth[1].length !== 2 ||
    divBirth[2].length !== 2
  )
    return "Escriba en el order especificado 'año-mes-dia'";
};

export const isTeam = (team) => {
    if(!team) return "La casilla no puede estar vacia"
}