const form = document.getElementById("submitEntry")

const newEntry = async (e) => {
    e.preventDefault()
    const category = document.getElementById('category')
    const date = document.getElementById('date')
    const entry = document.getElementById("freeform")
    const message = document.getElementById("display")

    const options = {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            category: category.value,
            date: date.value,
            entry: entry.value
        })
    }

    const response = await fetch('http://localhost:3000/home', options)

    const data = await response.json()

    console.log(response.status)
    if (response.status === 200) {
        message.innerText = data.message
    } else {
        alert(data.error)
    }
}

form.addEventListener('submit', (e) => { newEntry(e) })