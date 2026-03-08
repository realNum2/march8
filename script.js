let button = document.getElementById("magicButton")
let message = document.getElementById("message")
let heartsContainer = document.getElementById("hearts")

button.onclick = function() {
    message.style.display = "block"
    button.style.display = "none"
    createHearts()
}

function createHearts() {
    setInterval(function() {
        let heart = document.createElement("div")
        hearts.classList.add("heart")
        hearts.innerHTML = "❤"
        hearts.style.left = Math.random() * 100 + "vw"
        hearts.style.fontSize = (20 + Math.random() *30) + "px"
        heartsContainer.appendChild(heart)
        setTimeout(function() {
            heart.remove()
        }, 6000)
    }, 300)
}