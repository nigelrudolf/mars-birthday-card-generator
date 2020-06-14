// console.log("CONNECTION ESTABLISHED");
// console.log(`api_key=tBamPmfMDWz4V3P6N9NonSibwfdLF73yuNa5GQVY`)

//VANILLA JS API REQUEST
// nasaApp.request = async function(){
    //     let API_KEY = "tBamPmfMDWz4V3P6N9NonSibwfdLF73yuNa5GQVY";
    //     let earth_date = `2016-12-26`;
    //     let response = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${earth_date}&api_key=${API_KEY}`);
    //     console.log(response);
    //     let data = await response.json();
    //     console.log(`here is a photo from that date ${data.photos[1].img_src}`);
    // }
    // nasaApp.request();
    
    
    //date control (taken from MDN) will grab the input with a type of 'date' and parse the value as YYYY-MM-DD which is the format necessary for the 'earth_date' key in the api request. ie
    // const dateControl = document.querySelector('input[type="date"]');
    // dateControl.value = "2019-01-01" // sets a default
    // console.log(dateControl.value);
    // userBirthday = dateControl.value 
    // console.log(userBirthday.slice(5))
    // url: `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${userBirthday}&api_key=${API_KEY}`,
    
    
    
    
    
const nasaApp = {}
// nasaApp.data = {
//     roverName : result.photos[1].rover.name,
// // camera: photos[1].camera.name,
// // sol: photos[1].sol,
// // rover: photos[1].rover.name,
// // exampleImage: photos[1].img_src
// }
// nasaApp.birthdayCard = `
// <div class="birthday-card">
// <div class="nasa-img"></div>
// <p>Birhday Message</p>
// <ul>
//     <li>Rover: ${nasaApp.data.rover}</li>
//     <li>Cam: ${nasaApp.data.camera}</li>
//     <li>Sol:${nasaApp.data.sol} </li>
// </ul>
// <ul>
//     <li><a href=""><i class="social-icon fab fa-twitter"></i></a></li>
//     <li><a href=""><i class="social-icon fab fa-facebook-f"></i></a></li>
// </ul>
// </div>`;
// nasaApp.displayBirthdayCard = function(){
//     $(".navigation").after(nasaApp.birthdayCard);
// }

// nasaApp.hideBirthdayForm = function(){
//     $(".birthday-form").hide();
// }

nasaApp.key = "tBamPmfMDWz4V3P6N9NonSibwfdLF73yuNa5GQVY"
nasaApp.url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2016-12-26&api_key=${nasaApp.key}`


nasaApp.init =  function(){
    $.ajax({
        url: nasaApp.url,
        method: 'GET',
        dataType: 'json',
    }).then(function(result){
        console.log(nasaApp.data.roverName)
        nasaApp.data = {
            roverName : result.photos[1].rover.name,
        // camera: photos[1].camera.name,
        // sol: photos[1].sol,
        // rover: photos[1].rover.name,
        // exampleImage: photos[1].img_src
        }
        
    
    });        

    $('.form-button').on('click', function(e){
        e.preventDefault();
        // nasaApp.hideBirthdayForm();
        // nasaApp.displayBirthdayCard();
    });
};



$(function (){
    
    nasaApp.init();

});

