const elements = document.querySelectorAll(".title h4")
const LIMIT = 25

for (let h4 of elements) {
  const aboveLimit = h4.innerText.length > LIMIT
  const dotsOrEmpty = aboveLimit ? "..." : ""
  h4.innerText = h4.innerText.substring(0, LIMIT) + dotsOrEmpty
}
