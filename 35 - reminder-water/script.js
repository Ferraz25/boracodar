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
