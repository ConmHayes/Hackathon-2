const form = document.getElementById('logIn')
const message = document.getElementById('message')

const login = async (e) => {
    e.preventDefault()
    const username = document.getElementById('username')
    const password = document.getElementById('password')

    const options = {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: username.value,
            password: password.value
        })
    }

    console.log("Entering fetch");

    const response = await fetch('http://localhost:3000/', options)

    console.log("Exiting fetch")

    const data = await response.json()
    console.log(response.status)
    if (response.status === 200) {
        window.location.assign("home.html")
    } else {
        alert(data.error)
    }
}

form.addEventListener('submit', (e) => { login(e) })