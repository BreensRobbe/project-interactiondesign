const serverEndPoint = 'https://api.nasa.gov/planetary/apod'
const apiKey = '?api_key=MsVwdNzUZ5FpCweL2JX7nbFQz9YbvTO1WugLvjqG'



async function getData(serverEndPoint, apiKey, param) {
    const response = await fetch(serverEndPoint + apiKey + param)
    const responseJson = await response.json()
    console.log(responseJson)

    document.querySelector('.date').textContent = responseJson["date"]
    document.querySelector('.explanation').textContent = responseJson["explanation"]
    document.querySelector('.title').textContent = responseJson["title"]
    document.querySelector('.image').src= responseJson["url"]
}




const listenToClickDays = function() {
    const days = document.querySelectorAll(".day")
    for (const day of days){
        day.addEventListener("click", function(){
            
            console.log("Clicked" + this.innerText)
        })
    }
}

document.addEventListener('DOMContentLoaded', async function () {

    const response = await fetch(serverEndPoint + apiKey)
    const responseJson = await response.json()
    console.log(responseJson)

    document.querySelector('.date').textContent = responseJson["date"]
    document.querySelector('.explanation').textContent = responseJson["explanation"]
    document.querySelector('.title').textContent = responseJson["title"]
    document.querySelector('.image').src= responseJson["url"]

    listenToClickDays();
})
