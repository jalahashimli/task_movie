let addButton = document.querySelector("#addButton")

addButton.addEventListener("click", () => {
    var movieName = document.querySelector("#movie").value
    document.querySelector("#movie").value = ""

    var newButton = document.createElement("button")
    newButton.innerHTML = movieName

    newButton.addEventListener("click", () => {
        const url = `http://www.omdbapi.com/?apikey=a64b078f&t=${movieName}`

        fetch(url)
            .then(response => response.json())
            .then(data => {
                document.querySelector("#title").innerHTML = data.Title
                document.querySelector("#year").innerHTML = data.Year
                document.querySelector("#poster").src = data.Poster
            })
    })

    document.querySelector("#buttons").append(newButton)
})