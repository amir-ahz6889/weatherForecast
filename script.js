// const api='https://api.openweathermap.org/data/2.5/weather?q=esfahan&appid=673d84306dcf23cda871aa58af806ab5&units=metric'
// +`&appid=${apiKey}`

let apiUrl='https://api.openweathermap.org/data/2.5/weather?units=metric&q='
let apiKey='673d84306dcf23cda871aa58af806ab5'
const inputText=document.querySelector('.search-container input')
const searchBtn=document.querySelector('.searchbtn')
const weatherPic=document.querySelector('.weatherpic')

 async function check(city){
        const res=await fetch(apiUrl +city+`&appid=${apiKey}`  );
        
        var data=await res.json();
        console.log(data)
        document.querySelector('.cityname').innerHTML=data.name;
        document.querySelector('.weatherType').innerHTML=data.weather[0].main;
        document.querySelector('.desc').innerHTML=data.weather[0].description;
        document.querySelector('.tempNormal').innerHTML=Math.round(data.main.temp ) + ' c';
        document.querySelector('.tempMin').innerHTML=Math.round(data.main.temp_min ) + ' c';
        document.querySelector('.tempMax').innerHTML=Math.round(data.main.temp_max ) + ' c';


        if(data.weather[0].main =='Clouds'){
            weatherPic.src='images/cloudy.jpg';

        }
        else if(data.weather[0].main =='Mist'){
            weatherPic.src='images/mist.jpg';

        }
        else if(data.weather[0].main =='Rain'){
            weatherPic.src='images/rainy.jpg';

        }
        else if(data.weather[0].main =='Drizzle'){
            weatherPic.src='images/drizzle.jpg';

        }
        else if(data.weather[0].main =='Clear'){
            weatherPic.src='images/clear.jpg';

        }
        document.querySelector('#result').style.display='block'
    }

   searchBtn.addEventListener('click',()=>{
    check(inputText.value)
   })
  