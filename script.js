// console.log("CONNECTION ESTABLISHED");
// console.log(`api_key=tBamPmfMDWz4V3P6N9NonSibwfdLF73yuNa5GQVY`)




//this is a request without ajax, just testing it as a backup
const app = {}

    app.request = async function(){
        let API_KEY = "tBamPmfMDWz4V3P6N9NonSibwfdLF73yuNa5GQVY";
        let earth_date = `2016-12-26`;
        let response = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${earth_date}&api_key=${API_KEY}`);
        console.log(response);
        let data = await response.json()
        console.log(data.photos[1].img_src);
    }
app.request();


//this one utilizes jquery/ajax. it was a bit finicky at first, but it manages to move onto the 'it worked' callback, which i believe the classnotes said indicates a success
$(function (){
    
    let API_KEY = "tBamPmfMDWz4V3P6N9NonSibwfdLF73yuNa5GQVY";
    let earth_date = `2016-12-26`;
    $.ajax({
        url: `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${earth_date}&api_key=${API_KEY}`,
        method: 'GET',
        dataType: 'json',   
    }).then(function(){
        console.log('it worked')
    });
});



//date control (taken from MDN) will grab the input with a type of 'date' and parse the value as YYYY-MM-DD which is the format necessary for the 'earth_date' key in the api request. ie
const dateControl = document.querySelector('input[type="date"]');
dateControl.value = "2019-01-01" // sets a default
// console.log(dateControl.value);
userBirthday = dateControl.value 
url: `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${userBirthday}&api_key=${API_KEY}`,
