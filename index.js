
let button = document.querySelector("button")

async function getQuote() {

    let response = await fetch("https://api.api-ninjas.com/v1/quotes", {
        method: "GET",
        headers: {
            "X-Api-Key": 'Hec0eE5VA1PLdyFQhCFd6BuuzmarHokCvoDuHjXT'
        }

    });

    let data = await response.json();
    console.log(data)
    document.querySelector("#quote").innerHTML = data[0].quote;
    document.querySelector("#writer").innerHTML = data[0].author;
}

getQuote()

