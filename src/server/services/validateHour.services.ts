export const validateHorario = (horario: string): boolean => {
  const horariovalida = horario.split(':');
  if (horariovalida.length !== 2) {
    return true;
  }
  const hora = parseInt(horariovalida[0]);
  const minuto = parseInt(horariovalida[1]);
  if (hora < 0 || hora > 23) {
    return true;
  }
  if (minuto < 0 || minuto > 59) {
    return true;
  }

  if (minuto % 15 !== 0) {
    return true;
  }

  return false;
};