async function thunder(city) {   
    const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'b11209cb19msh1099e92456ff715p17d4f8jsnb810c52aa6f0',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        const obj = JSON.parse(result);
        console.log(obj);
        document.querySelector(".temp").innerHTML = obj.temp + "°C";
        document.querySelector(".humidityNumber").innerHTML = obj.humidity + "%";
        document.querySelector(".speed").innerHTML = obj.wind_speed + " Km/hr";
        document.querySelector(".city").innerHTML = document.querySelector(".input").value;

        if(obj.temp <= 2){
            document.querySelector(".icon").src = "snow.png";
        } else if(obj.humidity >= 80){
            document.querySelector(".icon").src = "rain.png";
        } else if(obj.wind_speed >= 8){
            document.querySelector(".icon").src = "drizzle.png";
        };
        
        // if(obj.humidity >= 80){
        //     let data = "";
        //     data = data + `<img class="m-auto h-40" src="rain.png" alt="">`
        //     document.querySelector("card").innerHTML = data;
        // };
        // if(obj.wind_speed >= 8){
        //     let data = "";
        //     data = data + `<img class="m-auto h-40" src="clear.png" alt="">`
        //     document.querySelector("card").innerHTML = data;
        // }
    } catch (error) {
        console.error(error);
    }
}
let ccity = document.querySelector(".input");
document.querySelector(".btn").addEventListener("click", ()=>{
    thunder(ccity.value)
})

