export const obtenerDiferenciaYears = (year) => new Date().getFullYear() - year;

export const calcularMarca = (marca) => {
  let increment;

  switch (marca) {
    case "europe":
      increment = 1.3;
    case "americano":
      increment = 1.15;
    case "asiatico":
      increment = 1.05;
    default:
      break;
  }

  return increment;
};
