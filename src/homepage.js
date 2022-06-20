export function showHome() {
    const header = document.createElement("div")
    header.classList.add("header")
    content.appendChild(header)

    const logo = document.createElement("h1")
    logo.textContent = "BISTRO"
    header.appendChild(logo)

    const buttons = document.createElement("div")
    buttons.classList.add("buttons")
    header.appendChild(buttons)

    const home = document.createElement("button")
    home.classList.add("home")
    home.textContent = "HOME"
    buttons.appendChild(home)

    const menu = document.createElement("button")
    menu.classList.add("menu")
    menu.textContent = "MENU"
    buttons.appendChild(menu)   
    
    const contact = document.createElement("button")
    contact.classList.add("contact")
    contact.textContent = "CONTACT US"
    buttons.appendChild(contact)

    const image = document.createElement("div")
    image.classList.add("image")
    content.appendChild(image)

    const darkBg = document.createElement("div")
    darkBg.classList.add("darkbg")
    image.appendChild(darkBg)

    const headLine = document.createElement("h1")
    headLine.textContent = "An Experience You Won’t Forget"
    darkBg.appendChild(headLine)
}

