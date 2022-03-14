const API_KEY = '739dd7c734649c5c003a0911ab317be2';


const convert_to_json = function (response) {
    return response.json();
}


const handle_user_data = function (api) {
    console.log(api);
    const city_n = api.name;
    localStorage.setItem("city",city_n);
    const icon_link = api.weather[0].icon;
    localStorage.setItem("icon", icon_link);
    const temp = api.main.temp;
    localStorage.setItem("act_temp", temp);
    const temp_max = api.main.temp_max;
    localStorage.setItem("max_temp", temp_max);
    const temp_min = api.main.temp_min;
    localStorage.setItem("min_temp", temp_min);
    const condition = api.weather[0].main;
    localStorage.setItem("cond", condition);
    const description = api.weather[0].description;
    localStorage.setItem("desc", description);
    window.location.href = './report.html'

    // console.log(icon_link);
    // console.log(temp);
    // console.log(temp_max);
    // console.log(temp_min);
    // console.log(condition);
    // console.log(description);
}



const user_loacation = function () {
    if (!navigator.geolocation) {
        alert('Geolocation is not supported by this browser.');
    }
    else {
        navigator.geolocation.getCurrentPosition(success, error);
    }
}

const success = function (position) {
    lat = (position.coords.latitude);
    lon = (position.coords.longitude);
    reverse_geo_user(lat, lon);

}

const reverse_geo_user = function (lat, lon) {
    let coordinates = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;
    fetch(coordinates).then(convert_to_json).then(handle_user_data);
}

const error = function () {
    console.log('Geolocation Error!');
}

const loc = document.getElementById('current_btn');
loc.addEventListener('click', user_loacation);


//for continuous location tracking
// navigator.geolocation.watchPosition(success);

