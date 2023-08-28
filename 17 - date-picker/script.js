const currentDate = document.querySelector(".current-date"),
  daysTag = document.querySelector(".days"),
  prevNextIcon = document.querySelectorAll("header i")

let date = new Date(),
  currYear = date.getFullYear(),
  currMonth = date.getMonth()

const months = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
]

const renderCalendar = () => {
  let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(), //recebendo o primeiro dia do mês
    lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(), //obtendo a última data do mês
    lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(), //chegando no último dia do mês
    lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate() //obtendo a última data do mês anterior
  let liTag = ""

  //criando li do mês anterior últimos dias
  for (let i = firstDayofMonth; i > 0; i--) {
    liTag += `<li class = "inactive">${lastDateofLastMonth - i + 1}</li>`
  }

  //criando li de todos os dias do mês atual
  for (let i = 1; i <= lastDateofMonth; i++) {
    //adicionando classe ativa a li se o dia, mês e ano atuais corresponderem
    let isToday =
      i === date.getDate() &&
      currMonth === new Date().getMonth() &&
      currYear === new Date().getFullYear()
        ? "active"
        : ""
    liTag += `<li class="${isToday}">${i}</li>`
  }

  //criando li do próximo mês, primeiros dias
  for (let i = lastDayofMonth; i < 6; i++) {
    liTag += `<li class = "inactive">${i - lastDayofMonth + 1}</li>`
  }

  currentDate.innerText = `${months[currMonth]} ${currYear}`
  daysTag.innerHTML = liTag
}

renderCalendar()

prevNextIcon.forEach((icon) => {
  icon.addEventListener("click", () => {
    currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1

    //se o mês atual for menor que 0 ou maior que 11
    if (currMonth < 0 || currMonth > 11) {
      //criando uma nova data do ano e mês atual e passando-a como valor de data
      date = new Date(currYear, currMonth)

      //atualizando o ano atual com a nova data ano
      currYear = date.getFullYear()

      //atualizando o mês atual com a nova data mês
      currMonth = date.getMonth()

      //senão passe a nova data como valor de data
    } else {
      date = new Date()
    }

    renderCalendar()
  })
})
