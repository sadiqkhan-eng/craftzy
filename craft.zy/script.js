async function getWeather() {
    const city = document.getElementById("city").value;
    const apiKey = '61a2d5e18f23eb9a465ea9308e2b5215';

    if (!city) {
        document.getElementById("result").innerHTML = "Please enter a city.";
        return;
    }

    const url =
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === "404") {
            document.getElementById("result").innerHTML = "City not found!";
            return;
        }

        const temp = data.main.temp;
        const desc = data.weather[0].description;
        const icon = data.weather[0].icon;

        document.getElementById("result").innerHTML = `
            <h3>${data.name}</h3>
            <img src="https://openweathermap.org/img/wn/${icon}@2x.png">
            <p><b>${temp}°C</b></p>
            <p>${desc}</p>
        `;
    } catch (error) {
        document.getElementById("result").innerHTML = "Error fetching data.";
    }
}
