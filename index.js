// fetch from api
let weather = {
    "apiKey":"47eab7bca59670929721caa9a5293a99",
    fetchWeather: function(city){
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" 
            + city
            + "&units=metric&appid="
            + this.apiKey
        )
        .then((Response) => Response.json())
        .then((data) => this.displayWeather(data));
    },
    // end

    // display data
    displayWeather: function(data){
        const { name } = data;
        const { icon , description } = data.weather[0];
        const { temp , humidity } = data.main;
        const { speed } = data.wind;
        console.log(name , icon , description , temp , humidity , speed);
        document.querySelector(".city").innerText = "Weather in" + " " +name;
        document.querySelector(".icon").src = "http://openweathermap.org/img/w/" + icon + ".png";
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText = "Humidity :" +" "+ humidity + "%";
        document.querySelector(".description").innerText = description;
        document.querySelector(".wind").innerText = "Wind :"+ " " + speed + " km/h";
    },
    // end
    // input and search button
    search : function(){
     this.fetchWeather(document.querySelector(".search-bar").value);
    },
}
document.querySelector(".search button").addEventListener("click",function(){
    weather.search();
})
// end