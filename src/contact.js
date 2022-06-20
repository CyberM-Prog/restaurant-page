export function showContact() {
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
    image.classList.add("contactimage")
    content.appendChild(image)

    const menu1 = document.createElement("div")
    image.appendChild(menu1)
}