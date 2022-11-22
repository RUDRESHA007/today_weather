const g_img=document.querySelector('.img').src='https://i.pinimg.com/236x/66/6a/78/666a78acb6434068083631aae8f24d8a.jpg'
const search_box = document.querySelector('.search');// TEXTBOX VALUE

const search = document.querySelector('.search_btn');
const city = document.querySelector('.city')
const current_month = document.querySelector('.date')
const current_day = document.querySelector('.day');
const current_time = document.querySelector('.time');

const tempreture = document.querySelector('.tempreture');
search.addEventListener('click', () => {

    city.innerHTML = ''
    if (search_box.value == '') {
        alert("enter your city name")
        g_img='https://i.pinimg.com/236x/66/6a/78/666a78acb6434068083631aae8f24d8a.jpg'

        tempreture.innerHTML = ""
    }

    //api attributes
    const api_key = '81fd4540b5bd74b2ab9d7e71bb8bd022';

    //api url
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${search_box.value}&appid=${api_key}`;


    // api fetching
    const weather_api = async () => {

        const responce = await fetch(url);
        const data = await responce.json()

        var count = Object.keys(data).length;
        console.log(count);        
        const { weather, main, sys, name, message } = data;//object destructure
if(count>2){
    const tempreture_value = main.temp - 273.15;//tempreture in kelvin format and it can converted into celsius, ie kelvin-273.15 formula

    const reports = data.weather[0].main;//wether report ie sunny,cloud anfd rainy

    const country = data.sys.country;//country name

    const nameofcity = data.name //name of the city
    //------------------------------------------------------------------------------------------

    //report status from the API

    if (reports == 'Clouds') {
       
        const g_img=document.querySelector('.img').src='https://media.istockphoto.com/vectors/rain-vector-id1402097303?k=20&m=1402097303&s=612x612&w=0&h=pWU9BHaSe4-qac1BtGHAl71Tu_M0kFVCNNCATCm-H0A='

    }
    else if (reports == 'Rain') {
       
        const g_img=document.querySelector('.img').src='https://media.istockphoto.com/vectors/happy-young-woman-with-umbrella-walks-a-dog-in-a-raincoat-in-city-in-vector-id1267365075?k=20&m=1267365075&s=612x612&w=0&h=0ifMLYoEDJMwz8aNOdwKI5cxwHF4OBdw3Wy7OJ0JKQg='
    }
    else if (reports == 'Clear') {
       
        const g_img=document.querySelector('.img').src='https://thumbs.dreamstime.com/b/couple-mom-daughter-walking-summer-hot-weather-under-scorching-sun-family-walking-fashionable-modern-clothes-207956570.jpg'
    }
    else if (reports == 'Sunny') {
        const g_img=document.querySelector('.img').src='https://media.istockphoto.com/vectors/walking-dog-woman-on-nature-pet-owner-two-cute-dogs-and-girl-in-park-vector-id1283372696?k=20&m=1283372696&s=612x612&w=0&h=9LBi-QgdQQFY84hih6VyJgqqceoxv7CDoquNjDqxfJk='
    }
    else if (reports == 'Snow') {
        const g_img=document.querySelector('.img').src='https://media.istockphoto.com/id/1291940291/vector/winter-couple-of-happy-girl-and-guy-wearing-warm-clothes-jacket-and-hat-young-adult-people.jpg?s=612x612&w=0&k=20&c=LrahUwYU649ddhuOB7QyFQuX_7n2KKtRRLKudkCKWzw='
    }

//-------------------------------------------------------------------------------------
    //api output
    city.innerHTML = `${search_box.value},${country}`;
    tempreture.innerHTML = `${parseInt(tempreture_value)}<sup>o</sup>C `;
    city.style.color='orange'


}
else{
    city.innerHTML = `${data.message}...!`;}
    const g_img=document.querySelector('.img').src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdDi9PMvhfam0j8gOQWUmlj7aIXHVdQfcLB8zR9HDAia_tJ5zQlq5wdIZi9NGcAUM1i7M&usqp=CAU'
    }
    weather_api()

})
let timecode = '';
// date method
const date_info = new Date();

//time format
let hour = date_info.getHours();
const minute = date_info.getMinutes();
if (hour >= 12) {
    timecode = 'PM'
    hour -= 12;
}
else {
    timecode = 'AM'
}
//------------------------------------------------------------------------------------------


// date information
const date = date_info.getDate();
const month = date_info.getMonth() + 1;
const day = date_info.getDay()

const monthArray = ['', 'Janauary', 'Febrauary', 'March', "April", 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];//months name in the form of array
const dayArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];//day name in the form of array

//display the date section
current_month.innerHTML = monthArray[month];
current_day.innerHTML = `${dayArray[day]},${date}`;


current_time.innerHTML = `${hour}:${minute} ${timecode}`


