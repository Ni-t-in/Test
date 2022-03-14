const API_KEY = '739dd7c734649c5c003a0911ab317be2';

const convert_to_json = function (response) {
    return response.json();
}

const generate_code = function (api) {
    let code = api.records[0].fields.iso3_code;
    code_obtained(code);
}

const code_obtained = function (code) {
    const city_name = document.getElementById('city').value;
    const country_code = code;
    data_obatined(city_name, country_code);
}
const search_country_code = function () {

    const country_name = document.getElementById('country').value;

    let get_country_code = `https://public.opendatasoft.com/api/records/1.0/search/?dataset=countries-codes&q=${country_name};`
    fetch(get_country_code).then(convert_to_json).then(generate_code);

}

const generate_information = function (api) {
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


const data_obatined = function (city_name, country_code) {
    let location_by_name = `https://api.openweathermap.org/data/2.5/weather?q=${city_name},${country_code}&units=metric&appid=${API_KEY}`;

    fetch(location_by_name).then(convert_to_json) .then(generate_information);
}

const search_btn = document.getElementById('search_btn');
search_btn.addEventListener('click', search_country_code);
