import { getFullDate } from "./getDate"

type dataType = {
  names: string[]
  apartment: string
  startAt: string
  endAt: string
}

const salutation = () => {
  const date = new Date()
  const hour = date.getHours()

  if (hour >= 5 && hour < 12) {
    return "Bom dia"
  }
  if (hour >= 12 && hour < 18) {
    return "Boa tarde"
  }
  return "Boa noite"
}

const generateEmailLink = ({ names, apartment, startAt, endAt }: dataType) => {
  const sendTo = "sac@lakeside.com.br"
  const subject = `Hóspedes ${apartment} dias ${startAt} - ${endAt}`
  const body = `${salutation()}%0D%0DInformo hóspedes dos dias ${getFullDate(
    startAt
  )} até ${getFullDate(endAt)} da unidade ${apartment}: %0D%0D ${names.join(
    "%0D"
  )}%0D%0D%0D Att. Talita Gabrielle`

  return `mailto:${sendTo}?subject=${subject}&body=${body}`
}

export default generateEmailLink
