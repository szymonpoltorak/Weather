function getProperDisplay(item){
    let newItem = parseInt(item);

    return newItem < 10 ? "0" + item : item;
}

function displayCurrentTime(){
    const timeElement = document.querySelector("#timer");

    let date = new Date();
    let hours = getProperDisplay(date.getHours());
    let minutes = getProperDisplay(date.getMinutes())
    let seconds = getProperDisplay(date.getSeconds());

    timeElement.textContent = hours + ":" + minutes + ":" + seconds;
}

function displayCurrentDate(){
    const dateElement = document.querySelector("#date");

    let date = new Date();
    let month = getProperDisplay(date.getMonth() + 1);
    let day = getProperDisplay(date.getDay() + 1);
    let currentDate = day + "." + month + "." + date.getFullYear();

    dateElement.textContent = currentDate.toString();
}

displayCurrentTime();
displayCurrentDate();
setInterval(displayCurrentTime, 1000);
