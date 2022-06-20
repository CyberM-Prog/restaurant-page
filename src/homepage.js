const header = document.createElement("div")
header.classList.add("header")
content.appendChild(header)

const logo = document.createElement("h1")
logo.textContent = "BISTRO"
header.appendChild(logo)

const image = document.createElement("div")
image.classList.add("image")
content.appendChild(image)

const darkBg = document.createElement("div")
darkBg.classList.add("darkbg")
image.appendChild(darkBg)

const headLine = document.createElement("h1")
headLine.textContent = "An Experience You Won’t Forget"
darkBg.appendChild(headLine)

