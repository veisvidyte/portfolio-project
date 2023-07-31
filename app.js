function sendAlert {
    prompt("Please enter your name")
    prompt("Please enter your email address")
    alert(`Thank you ${name}, you will be notified!`)
}

let notifyMeButton = document.querySelector("#notify-me-button")
notifyMeButton.addEventListener("click", sendAlert)