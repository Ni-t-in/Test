document.innerHTML = '';

let city = localStorage.getItem("city");
let temp = localStorage.getItem("act_temp");
let temp_max = localStorage.getItem("max_temp");
let temp_min = localStorage.getItem("min_temp");
let condition = localStorage.getItem("cond");
let description = localStorage.getItem("desc");
let weather_icon = localStorage.getItem("icon");

const city_ed = document.getElementById('city_n');
city_ed.innerText = city;

const temp_ed = document.getElementById('act_temp');
temp_ed.innerText = temp;

const max_temp_ed = document.getElementById('max_temp');
max_temp_ed.innerText = temp_max;

const min_temp_ed = document.getElementById('min_temp');
min_temp_ed.innerText = temp_min;

const cond_ed = document.getElementById('condition');
cond_ed.innerText = condition;

const description_ed = document.getElementById('description');
description_ed.innerText = description;

const icon_ed = document.getElementById('weather_png');
icon_ed.src = `./Data/Icons/${weather_icon}.png`;

