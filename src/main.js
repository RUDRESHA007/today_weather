const request = require("request")
const express = require("express")
const path = require('path')
const app = express();
const port = 8080;//port number


//run static files like css ,html etc
const staticpath =path.join(__dirname,'../public')
app.use(express.static(staticpath))
//app.use(express.static(__dirname,'../public'))

//----------------------------------------------------------------------------

// //set view directory
// const viewpath =path.join(__dirname,'../views')
// app.set('views',viewpath);
// // Set EJS as templating engine
// app.set('view engine', 'ejs');


//-----------------------------------------------------------------------

// //api attributes
// const api_key = '81fd4540b5bd74b2ab9d7e71bb8bd022';
// const city_name = 'shimoga';
// //api url
// const url = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${api_key}`;

// // api fetching using request module
// request(url, async (err, res, body) => {
//     const response = await JSON.parse(body);//to convert json method to object method

// //-----------------------------------------------------------------------
//     app.get('/', (req, res) => {

//         const { weather, main, sys, name } = response;//object destructure

//         const tempreture = main.temp - 273.15 ;//tempreture in kelvin format and it can converted into celsius, ie kelvin-273.15 formula

//         const reports = weather[0].main;//wether report ie sunny,cloud anfd rainy

//         const country = sys.country;//country name

//         const city = name //name of the city
// //------------------------------------------------------------------------------------------

// let timecode = '';
//         // date method
//         const date_info = new Date();

//         //time format
//         let hour = date_info.getHours();
//         const minute = date_info.getMinutes();
//         if (hour >= 12) {
//              timecode = 'PM'
//             hour -= 12;
//         }
//         else {
//             timecode = 'AM'
//         }
// //------------------------------------------------------------------------------------------


//         // date information
//         const date = date_info.getDate();
//         const month = date_info.getMonth() + 1;
//         const day = date_info.getDay()

//         const monthArray = ['', 'jan', 'feb', 'mar', "apr", 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];//months name in the form of array
//         const dayArray = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];//day name in the form of array
//        const current_month=monthArray[month];


// //------------------------------------------------------------------------------------------

// //send the responce and print on the browser page
//         res.render('index',{
//             tempreture:tempreture.toFixed(),
//             city_name:`${city_name},${country}`,
//             current_month:`${current_month} `,
//             current_date:`${dayArray[day]} ${date}`,
//             current_time:`${hour}:${minute}${timecode}`
//         });

    



      

//     })
   
// });
//to listen the port number for creating server through local host

//----------------------------------------------------------------------------
app.get('/',(req,res)=>{
    res.sendFile(__dirname,'../public/index.html');
 
  })
  app.get('*', function(req, res){
   res.status(404).sendFile(staticpath+'/404-error.html');
 });
 console.log(path.join(staticpath+'/index.html'));


app.listen(port, (req, res) => {
    console.log(`server started at ${port} `);
});

