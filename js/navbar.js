// Add navbar
const body = document.querySelector('body')
body.firstElementChild.innerHTML = `
        <div id="navbar-topline">
        <img src="./images/fb-w.png">
        <img src="./images/instagram-w.png">
        <img src="./images/twitter-w.png">
        </div>
        <img src="./images/logo-food.png" alt="logo">
        <div id="burger-container">
            <div class="burger-line"></div>
            <div class="burger-line"></div>
            <div class="burger-line"></div>
        </div>
        <nav>
            <a href="index.html">Home</a>
            <a href="about.html">About Us</a>
        </nav>
        `

// Set page top padding
const navBarY = body.firstElementChild.clientHeight
const padding = navBarY + 40
const firstSection = document.querySelector('section')
firstSection.style.paddingTop = padding + 'px'

// Burger button controls
const burgerContainer = document.querySelector('#burger-container')
const nav = document.querySelector('nav')
const burgerLines = document.querySelectorAll('.burger-line')

function toggleNavBar() {
    nav.classList.toggle('navbar-show')
    burgerLines.forEach(line => {
        line.classList.toggle('open')
    })
}

burgerContainer.addEventListener('click', toggleNavBar)