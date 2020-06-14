const nasaApp = {}



let roverArray = ['curiosity', 'opportunity', 'spirit'];

let dateRange = [00, 01, 02, 03, 04, 05 ,06, 07, 08, 09, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28]


function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

shuffle(roverArray);
let randomRover = roverArray[0];
shuffle(dateRange);
let randomDateRange = dateRange[0]
console.log(randomDateRange)



nasaApp.key = "tBamPmfMDWz4V3P6N9NonSibwfdLF73yuNa5GQVY";
nasaApp.url = `https://api.nasa.gov/mars-photos/api/v1/rovers/${randomRover}/photos?earth_date=2016-12-${randomDateRange}&api_key=${nasaApp.key}`;

nasaApp.getMarsImages = $.ajax({
    url: nasaApp.url,
    method: 'GET',
    dataType: 'json',
});

nasaApp.selectRandomImage = function() {
    
}

nasaApp.gatherFormData = function() {
    let email =  $('.email-input').val();
    let name =  $('.name-input').val();
    let birthday =  $('.birthday-input').val();
    let message =  $('.message-input').val();

    return [email, name, birthday, message];
}

nasaApp.generateBirthdayCard = function(roverName, camera, sol){
    const [email, name, birthday, message] = nasaApp.gatherFormData();
    return birthdayCard = `
    <div class="birthday-card">
    <div class="nasa-img"></div>
    <p>Happy Birthday ${name}. ${message}</p>
    <ul>
        <li>Rover: ${roverName}</li>
        <li>Cam: ${camera}</li>
        <li>Sol: ${sol}</li>
    </ul>
    <ul>
        <li><a href=""><i class="social-icon fab fa-twitter"></i></a></li>
        <li><a href=""><i class="social-icon fab fa-facebook-f"></i></a></li>
    </ul>
    </div>`;

} 

nasaApp.hideBirthdayForm = function(){
    $(".birthday-form").hide();
}

nasaApp.displayBirthdayCard = function(img_src, birthdayCard){
    $(".navigation").after(birthdayCard); // append .birthday-card div after .navigation
    $('.nasa-img').css("background", 'url(' + img_src + ')'); // set .nasa-img as randomly selected mars image
}

nasaApp.init =  function() {
    nasaApp.getMarsImages.then( (newImages) => {
        const { photos } = newImages;
        // selectRandomImage();
        const { camera, earth_date, img_src, rover, sol  } = newImages.photos[25]; // destructured :)
        $('.form-button').on('click', function(e){
            e.preventDefault();
            let birthdayCard = nasaApp.generateBirthdayCard(rover.name, camera.name, sol);
            nasaApp.hideBirthdayForm();
            nasaApp.displayBirthdayCard(img_src, birthdayCard);
        });

    }).fail( () => {
        console.log("no mars images");
        // add a default image
        nasaApp.displayBirthdayCard();
    })
};



$(function (){
    nasaApp.init();
});

