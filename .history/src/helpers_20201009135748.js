export const obtenerDiferenciaYears = (year) => new Date().getFullYear() - year;

export const calcularMarca = (marca) => {
  let increment;

  switch (marca) {
    case "europeo":
      increment = 1.3;
      break;
    case "americano":
      increment = 1.15;
      break;
    case "asiatico":
      increment = 1.05;
      break;
    default:
      break;
  }

  return increment;
};
