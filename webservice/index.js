const PTag = document.getElementById("WEATHER");

setInterval(() => {

    fetch("http://localhost/web-service/DTI.php").then(rawData => rawData.json()).then((jsonData) => {
        pTag.innerText = jsonData.weather + ".weather";
    })

}, 1000);
