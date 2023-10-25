lucide.createIcons()

const button = document.querySelector("button")
const modal = document.querySelector("dialog")
const buttonClose = document.querySelector("#close")

button.onclick = function () {
  modal.showModal()
}

buttonClose.onclick = function () {
  modal.close()
}

function startTimer(duration, display) {
  var timer = duration,
    minutes,
    seconds

  setInterval(function () {
    minutes = parseInt(timer / 60, 10)
    seconds = parseInt(timer % 60, 10)

    minutes = minutes < 10 ? "0" + minutes : minutes
    seconds = seconds < 10 ? "0" + seconds : seconds

    display.textContent = minutes + ":" + seconds

    if (--timer < 0) {
      timer = duration
    }
  }, 1000)
}

window.onload = function () {
  var duration = 60 * 1
  var display = document.querySelector(".timer")

  startTimer(duration, display)
}
