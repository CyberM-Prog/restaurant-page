import "./style.css";
import * as homePage from "./homepage"
import * as menu from "./menu"
import * as contact from "./contact"

homePage.showHome()

function createListeners() {
    const homeButton = document.querySelector(".home")
    homeButton.addEventListener("click", showHome)
    const menuButton = document.querySelector(".menu")
    menuButton.addEventListener("click", showMenu)
    const contactButton = document.querySelector(".contact")
    contactButton.addEventListener("click", showContact)
}
createListeners()

function showHome() {
    while (content.firstChild) {
        content.removeChild(content.firstChild)
    }
    homePage.showHome()
    createListeners()
}
    
function showMenu() {
    while (content.firstChild) {
        content.removeChild(content.firstChild)
    }
    menu.showMenu()
    createListeners()
}

function showContact() {
    while (content.firstChild) {
        content.removeChild(content.firstChild)
    }
    contact.showContact()
    createListeners()
}