export function getFullDate(dataString: string) {
  const date = new Date(dataString)
  const months = [
    "janeiro",
    "fevereiro",
    "março",
    "abril",
    "maio",
    "junho",
    "julho",
    "agosto",
    "setembro",
    "outubro",
    "novembro",
    "dezembro",
  ]
  const day = date.getDate()
  const month = months[date.getMonth()]
  return `${day} de ${month}`
}
